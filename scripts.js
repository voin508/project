/** @format */

window.AdditionalQuestion = {question: '', answer: ''};
function AllComplete() {
  valid = 0;
  countQ = 6;

  var rad = document.getElementsByName('a');

  if (!rad[answer1_i].checked) {
    document.getElementById('answer1').innerHTML = answer1;
    document.getElementById('answer1').style.color = 'red';
    document.getElementById('answer1').hidden = false;
  } else {
    document.getElementById('answer1').innerHTML = 'Верно';
    document.getElementById('answer1').style.color = 'green';
    document.getElementById('answer1').hidden = false;
    valid++;
  }

  var chbox = document.getElementsByName('b');
  if (
    chbox[answer2_i1].checked &&
    chbox[answer2_i2].checked &&
    chbox[answer2_i3].checked &&
    chbox[answer2_i4].checked
  ) {
    document.getElementById('answer2').innerHTML = answer2;
    document.getElementById('answer2').style.color = 'red';
    document.getElementById('answer2').hidden = false;
  } else if (
    !(
      chbox[answer2_i1].checked &&
      chbox[answer2_i2].checked &&
      chbox[answer2_i3].checked
    )
  ) {
    document.getElementById('answer2').innerHTML = answer2;
    document.getElementById('answer2').style.color = 'red';
    document.getElementById('answer2').hidden = false;
  } else {
    document.getElementById('answer2').innerHTML = 'Верно';
    document.getElementById('answer2').style.color = 'green';
    document.getElementById('answer2').hidden = false;
    valid++;
  }
  if (document.AllForms.attForm.value == 'empty') {
    document.getElementById('answer3').hidden = false;
    document.getElementById('answer3').innerHTML = 'Выберите ответ';
    document.getElementById('answer3').style.color = 'red';
  } else if (!(document.AllForms.attForm.value == answer3)) {
    document.getElementById('answer3').hidden = false;
    document.getElementById('answer3').innerHTML = answer3;
    document.getElementById('answer3').style.color = 'red';
  } else {
    document.getElementById('answer3').innerHTML = 'Верно';
    document.getElementById('answer3').style.color = 'green';
    document.getElementById('answer3').hidden = false;
    valid++;
  }

  if (!(document.AllForms.number_value.value == answer4)) {
    document.getElementById('answer4').hidden = false;
    document.getElementById('answer4').innerHTML = answer4;
    document.getElementById('answer4').style.color = 'red';
  } else {
    document.getElementById('answer4').innerHTML = 'Верно';
    document.getElementById('answer4').style.color = 'green';
    document.getElementById('answer4').hidden = false;
    valid++;
  }

  if (
    !(
      document.AllForms.text_value.value == answer5_0 ||
      document.AllForms.text_value.value == answer5_1 ||
      document.AllForms.text_value.value == answer5_2
    )
  ) {
    document.getElementById('answer5').hidden = false;
    document.getElementById('answer5').innerHTML = answer5_1;
    document.getElementById('answer5').style.color = 'red';
  } else {
    document.getElementById('answer5').innerHTML = 'Верно';
    document.getElementById('answer5').style.color = 'green';
    document.getElementById('answer5').hidden = false;
    valid++;
  }

  if (
    !(
      document.AllForms.one.value == answer6_1 &&
      document.AllForms.two.value == answer6_2 &&
      document.AllForms.three.value == answer6_3
    )
  ) {
    document.getElementById('answer6').hidden = false;
    document.getElementById('answer6').innerHTML = answer6;
    document.getElementById('answer6').style.color = 'red';
  } else {
    document.getElementById('answer6').innerHTML = 'Верно';
    document.getElementById('answer6').style.color = 'green';
    document.getElementById('answer6').hidden = false;
    valid++;
  }

  if (document.getElementById('additionalQ').hidden == false) {
    countQ++;
    if (
      !(document.AllForms.text_value_add.value == AdditionalQuestion.answer)
    ) {
      document.getElementById('answer7').hidden = false;
      document.getElementById('answer7').innerHTML = AdditionalQuestion.answer;
      document.getElementById('answer7').style.color = 'red';
    } else {
      document.getElementById('answer7').innerHTML = 'Верно';
      document.getElementById('answer7').style.color = 'green';
      document.getElementById('answer7').hidden = false;
      valid++;
    }
  }
  if (valid == countQ) {
    document.getElementById('results').innerHTML = 'Тест пройден!';
    document.getElementById('results').color = 'red';
    msgBg.style.display = 'block';
  } else {
    document.getElementById('results').innerHTML = 'Есть ошибки';
    document.getElementById('results').color = 'red';
    msgBg.style.display = 'block';
  }
}

function OpenAddForm() {
  document.getElementById('formQuest').hidden = false;
  document.getElementById('addQ').value = 'Изменить дополнительный вопрос';
}

function CreateQ() {
  AdditionalQuestion.question = document.getElementById('t_quest').value;
  AdditionalQuestion.answer = document.getElementById('t_answer').value;

  document.getElementById('formQuest').hidden = true;
  document.getElementById('additionalQ').hidden = false;
  document.getElementById('additionalTitle').innerHTML =
    AdditionalQuestion.question;
}
function CloseMsg() {
  msgBg.style.display = 'none';
}
