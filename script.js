$(function(){
  let questions = 5;
  let score = 0;

  $('#submitButton').click(function(event){
      event.preventDefault();
      
      let q1 = $('input[name="q1"]:checked').val();
      let q2 = $('input[name="q2"]:checked').val();
      let q3 = $('input[name="q3"]:checked').val();
      let q4 = $('input[name="q4"]:checked').val();
      let q5 = $('input[name="q5"]:checked').val();

  // validation
  if(q1 == null && q2 == null && q3 == null && q4 == null && q5 == null){
    alert(`No answers given to all questions!`)
    return false
  }
  for(let i = 1; i <= questions; i++){
    if(eval('q'+i) == null || eval('q'+i) == ''){
      alert(`You missed the question ${i} !`);
      return false;
    }
  }

  // correct answers
  const answer = ["b", "a", "d", "b", "d"];

  // set answers
  for(let i = 1; i <= questions; i++){
    if(eval('q'+i) == answer[i -1]) score++;
  }

  $('#results').text(`You scored ${score} out of ${questions}`);

  })

  console.log(`Add JQUERY CDN if deploying or add jquery.min.js locally`)
})
