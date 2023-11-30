function weatherButtonClickHandler() {
  console.log("NEWS CLICKED!!!");
  var subjectH3Element = document.querySelector("#subject");
  subjectH3Element.innerHTML = "DOM의 이해";
  subjectH3Element.style.color = "#fff";
  // window.location.href = "https://www.naver.com";
}

function sportsButtonClickHandler() {
    alert("스포츠 경기는 현재 확인 할 수 없습니다.");
}

function loopExample() {
    // 1부터 100까지 더한 결과를 로그에 찍는다.
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        // sum = sum + i;
        console.log(i);
    }

    console.log(sum);
}

function compareExample(age) {
    // number, string, object, array
    // Boolean: true / false
    var isAdult = age >= 19;
    var isbaby = age <= 3;

    if (!isAdult) {
        return console.log('성인이 아닌경우, 접속하실 수 없습니다.');
    }

    console.log('정상적으로 접속했습니다.');

    // if (isAdult) {
    //     console.log('성인 입니다.');
    // } else if (isbaby) {
    //     console.log('아기 입니다.')
    // } else {
    //     console.log('성인이 아닙니다.')
    // }
}

function switchExample(ageType) {
    switch (ageType) {
        case "adult":
            console.log('성인');
            break;
        case "baby":
            console.log('아기');
            break;
        default:
            console.log('청소년');
            break;
    }
}

function arrayExample() {
    // var numbersStr = "1,2,3,4,5,6,7,8,9,0";
    // var numbersArray = numbersStr.split(',');
    // console.log(numbersStr);
    // console.log(numbersArray);

    var alphabetArray = [];
    alphabetArray.push("A");
    alphabetArray.push("B");
    alphabetArray.push("C");
    alphabetArray.push("G");
    alphabetArray.push("D");
    alphabetArray.push("E");
    alphabetArray.push("F");

    // for (var i = 0; i < alphabetArray.length; i++) {
    //     console.log(alphabetArray[i]);
    // }

    // var str = alphabetArray.join(" ");
    // console.log(str);

    // var cIndex = alphabetArray.indexOf("Z");    
    // console.log(cIndex);

    // var alphabet = alphabetArray.pop();
    // alphabet = alphabetArray.pop();
    // console.log(alphabet);

    // var alphabet = alphabetArray[alphabetArray.length - 2];
    // console.log(alphabet);

    // alphabetArray = alphabetArray.sort();
    // console.log(alphabetArray);
}

function sortByAge(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > a.age) {
        return 1;
    }

    return 0;
}

function sortByName(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > a.name) {
        return 1;
    }

    return 0;
}

function arrayExample2() {
    var persons = [];
    var person1 = {
        name: "홍길동",
        age: 100
    };

    var person2 = {
        name: "김두한",
        age: 99
    };

    persons.push(person1);
    persons.push(person2);

    persons = persons.sort(sortByAge);
    persons = persons.sort(sortByName);

    console.log(persons);
}

window.addEventListener("load", function () {
    var pElements = document.querySelectorAll("p");
    for (var i = 0; i < pElements.length; i++) {
        pElements[i].innerHTML = "하하하";
    }

    // var div = document.querySelector("#numberList");
    // var listHtml = "";
    // listHtml += "<ul>";
    // for (var i = 1; i <= 100; i++) {
    //     listHtml += `<li>${i}</li>`;
    // }
    // listHtml += "</ul>";
    // div.innerHTML = listHtml;

//   var weatherButton = document.getElementById("weather");  
//   var weatherButton = document.querySelector("#weather");
//   weatherButton.addEventListener("click", weatherButtonClickHandler);

//   var sportsButton = document.querySelector("#sports");
//   sportsButton.addEventListener("click", sportsButtonClickHandler);
});
