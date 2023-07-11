import { useState, useEffect, useRef }from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid"; 
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai'
import interactionPlugin from '@fullcalendar/interaction';
import { ModalContent } from "./InputModal";
import axios from "axios";


/*
생각해봐야할 문제점. 
달력 조회 api를 보면 현재 클릭한 날짜의 파라미터 값을 넘겨야함.


1. 달력 조회 (달력 이전,다음 클릭시 해당 월에 맞는 데이터 조회 )

2. 달력 화면 그리기 (달력 라이브러리 이벤트 노출 부분 코드 작성필요)
- 달력 일에 관하여 화면에 
+ 데이터 (입금)
- 데이터 (지출)
이렇게 두개 씩 일별로 노출이 필요함 
const sampleData = 
[
  {title:'-2000'
  , date:'2023-07-08'
  }
  ,
  {title:'+2000'
  , date:'2023-07-08'
  }
];


3. 해당 일을 클릭시 
- 해당 일로 key로 매칭해서 해당 일에 관한 데이터 리스트 노출
- 하단에 상세 정보 노출
- 하단에서는 삭제 가능도 해야함 
- 하단에서 삭제시 달력에 있는 화면그리는부분도 변동되어야함

*/

type Data = {
  amount: string;
  _id: string;
  date: Date;
  title:string;
  number: string;
};

type Result = {
  title:string;
  date: Date;
};

type TResult = {
  title: number;
  date: string;
};


interface Transaction {
  _id: string;
  amount: number;
  userId: string;
  category: string;
  date: string;
}

type ViewDetailType = {
  _id : string;
  amount : number;
  date: Date;
}


export default function Full () {
  const [showModal, setShowModal] = useState(false);
  const [viewData, setViewData] = useState<any>([{
     _id:""
    ,title:""
    ,date: new Date()
    ,amount:""
    , number:""
  }]);

  const [viewDetail, setViewDetail] = useState<ViewDetailType[]>([]);

  const [viewDrow, setViewDrow] = useState<TResult[]>([{
   title:0
   ,date: ""
  }]);

  const Search = (params?:any) => { 
    let sysdatetime = null;
    if(params){
      sysdatetime = params;
    }else{
      sysdatetime = new Date();
    }
    const year = sysdatetime.getFullYear();
    const month = sysdatetime.getMonth() + 1;
    console.log(month)
    getData(year,month)
    .then((response) => {
      console.log(response?.data)
      // setViewData(response);
      setViewData([response?.data]);
      setViewDrow(transformData(response?.data));
      handleDateClick(null);
    })
  };

  const transformData = (data: Transaction[]): TResult[]  => { 
    // 날짜별로 데이터를 그룹화
    const dataEntries = Object.entries(data);
    const formattedData = dataEntries.reduce(
    (acc: Array<{ title: number; date: string }>, [, value]) => {
    if (Array.isArray(value)) {
        const subAcc = value.reduce(
          (
            subAcc: Array<{ title: number; date: string }>,
            cur: { amount: number; date: string }
          ) => {
                const parsedDate = new Date(cur.date);
                const dateKey = parsedDate.toISOString().split('T')[0];
                const foundPositive = subAcc.find(
                  (item) => item.date === dateKey && item.title >= 0
                );
                const foundNegative = subAcc.find(
                  (item) => item.date === dateKey && item.title < 0
                );

                if (cur.amount >= 0) {
                  if (foundPositive) {
                      foundPositive.title += cur.amount;
                  } else {
                      subAcc.push({ title: cur.amount, date: dateKey });
                  }
                } else {
                  if (foundNegative) {
                      foundNegative.title += cur.amount;
                  } else {
                      subAcc.push({ title: cur.amount, date: dateKey });
                  }
                }
                return subAcc;
              },[]
          );
            return [...acc, ...subAcc];
    } else {
        return acc;
      }
    },[]
    );
    console.log(formattedData);
    return formattedData;
  }
  
  const handleDatesSet = (arg:any) => {
    const argStart = new Date(arg.start); // arg.start를 Date 객체로 변환합니다.
    argStart.setMonth(argStart.getMonth() + 1); // 월을 1 증가시킵니다.
    Search(argStart);
  }

  useEffect(() => {
    Search();   
    //getData();
    //alert("입장") 
  },[]);

  useEffect(() => {
    // Search();   
    //getData();
    //alert("입장") 
    handleDateClick(null);
  },[viewData]);
  

  const handlePlus = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  };


  const getData = async(year: string,month: string) => {
    try {
      const response = await axios.get(
        ` /api/expenses/calendar?year=${year}&month=${month}&userId=team10`
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleblankDateClick = () => {
    setViewDetail([]);
  }

  const handleDateClick = async (info:any) => {
    let time 
    if(info){
      time = new Date(info.event.startStr);
    }else{
      time = new Date();
    }
    const day = time.getDate();
    setViewDetail(viewData[0][day]);
    console.log(viewDetail)
  };

  return (
    <>
    <PriceCntainer>

    </PriceCntainer>
    <CalendarBox>  
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        //eventDisplay= "list-item"
        eventClick={(handleDateClick)}
        dateClick={(handleblankDateClick)}
        events={viewDrow as unknown as EventInit[]}
        datesSet={handleDatesSet}
      />
    </CalendarBox>
    <ListDatabox>
      <ListboxCenter>
        <PlusMoneny>입금</PlusMoneny>
        {/* <MinusMoney>지출</MinusMoney> */}

        <ListboxLeft>
          {viewDetail &&
            viewDetail.map((item) => (
              item.amount > 0 ? <div>{item.amount}</div> : null
            ))
          }
        </ListboxLeft>

        <MinusMoney>지출</MinusMoney>
        <ListboxRight>
          {viewDetail &&
            viewDetail.map((item) => (
              item.amount < 0 ? <div>{item.amount}</div> : null
            ))
          }
        </ListboxRight>
      </ListboxCenter>

      <PlusCirclreBox>
        <AiFillPlusCircle className="plusbutton" onClick={handlePlus}/>
      </PlusCirclreBox>

      {showModal && (
       <ModalContent onClose={handleModalClose} onSearch={Search} />
      )}
    </ListDatabox>
    </>
  );
};

const PriceCntainer = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  height: 60px;
  background-color: green;
`

const CalendarBox = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
  height: 500px;
  background-color: #953fff;
  border-radius: 10px;

  .fc-theme-standard .fc-scrollgrid {
    width: 100%;
    background-color: #953fff;
    border-radius: 10px;
    border: none;
  }
  
  .fc-header-toolbar {
    width: 100%;
    position: relative;
    border-radius: 10px 10px 0px 0px;
    padding-bottom: 10px;
  }

  .fc .fc-toolbar-title {
    position: absolute;
    width: 210px;
    margin: auto;
    left: 290px;
    color:#ffff;
    top: 20px;
  }

  .fc-event-title fc-sticky{
    padding: 2px;
 
  }

  .fc-h-event{
    border: none;
    background-color: #BFA2DB;
    margin-top: 2px;
    border-radius: 5px;
  }

  .fc .fc-button-primary{
    border: none;
    background-color: #953fff;
    position: relative;
    top: 15px;
    margin-right: 15px;
  }

  .fc-button-group{
    position: absolute;
    border: 0;
    outline: 0;
    width: 6rem;
    background-color: #953fff;
    top: 5px;
    right: 550px;
  }

  .fc .fc-daygrid-day-number {
    font-size: 13px;
    font-weight: bold;
    margin-left: 20px;
    color:#ffff
  }

  .fc-col-header-cell-cushion{
    color:#ffff;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
  }

  /* 요일 행 */
  .fc .fc-scrollgrid-section table {
    height: 11px;
  }

/* border값 초기화 */
  .fc-theme-standard th, .fc-theme-standard td {
    border: 0px;
  }

  .fc .fc-daygrid-day-top {
    position: relative;
    right: 60px;
  }

  .fc .fc-scroller-liquid-absolute {
    position: relative;
  }

  div > .fc-daygrid-day-frame.fc-scrollgrid-sync-inner{
    height: max-content;
    display: flex;
    position: relative;
    overflow: hidden;
  } 

  .fc-daygrid-day-frame .fc-scrollgrid-sync-inner {
    background-color: yellow;
  }

  .fc-event-time{
    display: none;
  }
`
const PlusCirclreBox = styled.div`
  width: 70px;
  height: auto;
  position: absolute;
  top: 100px;
  left: 620px;

  .plusbutton{
    font-size: 70px;
    color: #442579;
    cursor: pointer;
  }
`
const ListDatabox = styled.div`
  width: 90%;
  position: relative;
  height: 190px;
  top: 90px;
  left: 40px;
`
const ListboxCenter = styled.div`
  width: 76%;
  position: relative;
  height:190px;
  margin: auto;
`
const PlusMoneny = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  left: 100px;
  font-weight: bold;
  border-radius: 10px;
`
const MinusMoney = styled.div`
  width: 50px;
  left: 380px;
  position: absolute;
  font-weight: bold;
`

const ListboxLeft = styled.div`
  width: 46%;
  height: 180px;
  position: absolute;
  top: 25px;
  background-color: #53c7a1;
  float: left;
  overflow-y: auto;
  max-height: 160px;
`
const ListboxRight = styled.div`
  width: 46%;
  height: 180px;
  position: relative;
  top: 25px;
  background-color: #FF6666;
  float: right;
  overflow-y: auto;
  max-height: 160px;
`

const ListBox = styled.div`
  width: 98%;
  height: 30px;
  background-color: pink;
  position: absolute;
`



