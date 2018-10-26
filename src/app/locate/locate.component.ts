import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {

  private gridApi;
  private gridColumnApi;


  constructor() { }

  rowData: any[] =
    [
      {
        "ballot": 1,
        "ballot_id": "012",
        "address": "ירמיהו,1 ",
        "location": "מתנ\"ס ע\"ש אלי כהן",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 2,
        "ballot_id": "017",
        "address": "יהודה הלוי,5 ",
        "location": "בי\"ס רמב\"ם (חדש)",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 3,
        "ballot_id": "017",
        "address": "יהודה הלוי,5 ",
        "location": "בי\"ס רמב\"ם (חדש)"
      },
      {
        "ballot": 4,
        "ballot_id": "001",
        "address": "רמז,8 ",
        "location": "בי\"ס אורנים",
        "acc": "כ"
      },
      {
        "ballot": 5,
        "ballot_id": "007",
        "address": "בית השואבה,7 ",
        "location": "מתנ\"ס קרית הצעירים"
      },
      {
        "ballot": 6,
        "ballot_id": "001",
        "address": "רמז,8 ",
        "location": "בי\"ס אורנים"
      },
      {
        "ballot": 7,
        "ballot_id": "014",
        "address": "טהון,5 ",
        "location": "בי\"ס עלומים",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 8,
        "ballot_id": "014",
        "address": "טהון,5 ",
        "location": "בי\"ס עלומים",
        "acc": "כ"
      },
      {
        "ballot": 9,
        "ballot_id": "001",
        "address": "רמז,8 ",
        "location": "בי\"ס אורנים",
        "acc": "כ"
      },
      {
        "ballot": 10,
        "ballot_id": "003",
        "address": "הבנים,46 ",
        "location": "בי\"ס גולן"
      },
      {
        "ballot": 11,
        "ballot_id": "004",
        "address": "הרב אורבוך,30 ",
        "location": "בי\"ס הדר"
      },
      {
        "ballot": 12,
        "ballot_id": "011",
        "address": "אוסישקין,101 ",
        "location": "בי\"ס ע\"ש יגאל אלון"
      },
      {
        "ballot": 13,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 14,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 15,
        "ballot_id": "007",
        "address": "בית השואבה,7 ",
        "location": "מתנ\"ס קרית הצעירים"
      },
      {
        "ballot": 16,
        "ballot_id": "007",
        "address": "בית השואבה,7 ",
        "location": "מתנ\"ס קרית הצעירים"
      },
      {
        "ballot": 17,
        "ballot_id": "012",
        "address": "ירמיהו,1 ",
        "location": "מתנ\"ס ע\"ש אלי כהן"
      },
      {
        "ballot": 18,
        "ballot_id": "007",
        "address": "בית השואבה,7 ",
        "location": "מתנ\"ס קרית הצעירים"
      },
      {
        "ballot": 19,
        "ballot_id": "002",
        "address": "תרפ\"ד,45 ",
        "location": "בי\"ס אמירים"
      },
      {
        "ballot": 20,
        "ballot_id": "003",
        "address": "הבנים,46 ",
        "location": "בי\"ס גולן",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 21,
        "ballot_id": "008",
        "address": "אוסישקין,7 ",
        "location": "בי\"ס ע\"ש קלמן"
      },
      {
        "ballot": 22,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין"
      },
      {
        "ballot": 23,
        "ballot_id": "002",
        "address": "תרפ\"ד,45 ",
        "location": "בי\"ס אמירים"
      },
      {
        "ballot": 24,
        "ballot_id": "016",
        "address": "השופטים,32 ",
        "location": "בי\"ס אור השחר"
      },
      {
        "ballot": 25,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין"
      },
      {
        "ballot": 26,
        "ballot_id": "008",
        "address": "אוסישקין,7 ",
        "location": "בי\"ס ע\"ש קלמן"
      },
      {
        "ballot": 27,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין"
      },
      {
        "ballot": 28,
        "ballot_id": "016",
        "address": "השופטים,32 ",
        "location": "בי\"ס אור השחר",
        "acc": "כ"
      },
      {
        "ballot": 29,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 30,
        "ballot_id": "003",
        "address": "הבנים,46 ",
        "location": "בי\"ס גולן"
      },
      {
        "ballot": 31,
        "ballot_id": "019",
        "address": "הבנים,46א",
        "location": "מתנס גולן"
      },
      {
        "ballot": 32,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 33,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 34,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 35,
        "ballot_id": "014",
        "address": "טהון,5 ",
        "location": "בי\"ס עלומים"
      },
      {
        "ballot": 36,
        "ballot_id": "019",
        "address": "הבנים,46א",
        "location": "מתנס גולן"
      },
      {
        "ballot": 37,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 38,
        "ballot_id": "011",
        "address": "אוסישקין,101 ",
        "location": "בי\"ס ע\"ש יגאל אלון"
      },
      {
        "ballot": 39,
        "ballot_id": "017",
        "address": "יהודה הלוי,5 ",
        "location": "בי\"ס רמב\"ם (חדש)"
      },
      {
        "ballot": 40,
        "ballot_id": "016",
        "address": "השופטים,32 ",
        "location": "בי\"ס אור השחר"
      },
      {
        "ballot": 41,
        "ballot_id": "011",
        "address": "אוסישקין,101 ",
        "location": "בי\"ס ע\"ש יגאל אלון",
        "acc": "כ"
      },
      {
        "ballot": 42,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין"
      },
      {
        "ballot": 43,
        "ballot_id": "003",
        "address": "הבנים,46 ",
        "location": "בי\"ס גולן",
        "acc": "כ"
      },
      {
        "ballot": 44,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין",
        "acc": "כ"
      },
      {
        "ballot": 45,
        "ballot_id": "017",
        "address": "יהודה הלוי,5 ",
        "location": "בי\"ס רמב\"ם (חדש)"
      },
      {
        "ballot": 46,
        "ballot_id": "001",
        "address": "רמז,8 ",
        "location": "בי\"ס אורנים",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 47,
        "ballot_id": "016",
        "address": "השופטים,32 ",
        "location": "בי\"ס אור השחר",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 49,
        "ballot_id": "019",
        "address": "הבנים,46א",
        "location": "מתנס גולן"
      },
      {
        "ballot": 51,
        "ballot_id": "004",
        "address": "הרב אורבוך,30 ",
        "location": "בי\"ס הדר"
      },
      {
        "ballot": 52,
        "ballot_id": "004",
        "address": "הרב אורבוך,30 ",
        "location": "בי\"ס הדר"
      },
      {
        "ballot": 54,
        "ballot_id": "008",
        "address": "אוסישקין,7 ",
        "location": "בי\"ס ע\"ש קלמן"
      },
      {
        "ballot": 55,
        "ballot_id": "008",
        "address": "אוסישקין,7 ",
        "location": "בי\"ס ע\"ש קלמן"
      },
      {
        "ballot": 58,
        "ballot_id": "005",
        "address": "אוסישקין,65 ",
        "location": "בי\"ס ממלכתי אוסישקין"
      },
      {
        "ballot": 59,
        "ballot_id": "009",
        "address": "יצחק אלחנן,13 ",
        "location": "בי\"ס קרית יערים"
      },
      {
        "ballot": 60,
        "ballot_id": "011",
        "address": "אוסישקין,101 ",
        "location": "בי\"ס ע\"ש יגאל אלון",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 63,
        "ballot_id": "019",
        "address": "הבנים,46א",
        "location": "מתנס גולן"
      },
      {
        "ballot": 64,
        "ballot_id": "006",
        "address": "הבאר,1 ",
        "location": "בי\"ס ע\"ש מאיר דורון",
        "acc": "כ"
      },
      {
        "ballot": 65,
        "ballot_id": "006",
        "address": "הבאר,1 ",
        "location": "בי\"ס ע\"ש מאיר דורון",
        "acc": "כ",
        "special_acc": "כ"
      },
      {
        "ballot": 66,
        "ballot_id": "012",
        "address": "ירמיהו,1 ",
        "location": "מתנ\"ס ע\"ש אלי כהן"
      },
      {
        "ballot": 67,
        "ballot_id": "012",
        "address": "ירמיהו,1 ",
        "location": "מתנ\"ס ע\"ש אלי כהן"
      },
      {
        "ballot": 68,
        "ballot_id": "006",
        "address": "הבאר,1 ",
        "location": "בי\"ס ע\"ש מאיר דורון",
        "acc": "כ"
      },
      {
        "ballot": 990,
        "ballot_id": "004",
        "address": "הרב אורבוך,30 ",
        "location": "בי\"ס הדר"
      }
    ]

  //
  // columnDefs = [
  //   {headerName: 'שדגשדג', field: 'make' },
  //   {headerName: 'Model', field: 'model' },
  //   {headerName: 'Price', field: 'price'}
  // ];

  columnDefs = [
    { field: "ballot", headerName: "סמל קלפי", "cellStyle": {"border-bottom": "1px black solid"}},
    { field: "ballot_id", headerName: "סמל רכוז" , "cellStyle": {"border-bottom": "1px black solid"}},
    { field: "address", headerName: "כתובת קלפי" , "cellStyle": {"border-bottom": "1px black solid"}},
    { field: "location", headerName: "מקום קלפי" , "cellStyle": {"border-bottom": "1px black solid"}},
    { field: "acc", headerName: "נגישה" , "cellStyle": {"border-bottom": "1px black solid"}},
    { field: "special_acc", headerName: "נגישה מיוחדת" , "cellStyle": {"border-bottom": "1px black solid"}},
    ]
  
  // rowData = [
  //   { make: 'שדגשדג', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  ngOnInit() {
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}
