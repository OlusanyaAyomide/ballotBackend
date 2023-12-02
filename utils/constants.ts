export const mockDatas:IHostelEntry[] =[
    {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
        {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },   
     {
        id:"1",
        matricNum :"210812047",
        hostel:"JAJA HALL",
        phoneNum:"08132526380",
        name:"Ayomide gratmus",
        securedBy :"Aizon",
        type:"personal",
        isSuccess :false,
        createdAt :"9:10 Am"
    },
]


type EntryType = "personal" | "group" | "both"

export interface IHostelEntry{
    id:string
    matricNum:string
    hostel:string
    phoneNum:string
    name:string
    securedBy:string
    type:EntryType
    isSuccess:boolean
    createdAt:string
}


export  const dateOptions : Intl.DateTimeFormatOptions = {
  month: 'short', 
  day: '2-digit',
  hour12: false,
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
  fractionalSecondDigits: 3 
};