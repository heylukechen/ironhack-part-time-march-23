// async function getRandomCatsFacts (){
//    const response =  await axios.get('https://cat-fact.herokuapp.com/facts');
//    const catsFacts = response.data.map(cat => cat.text);
//    document.getElementById('catsList').innerHTML = catsFacts;
// }

async function getRandomCatsFacts (){
   const response =  await fetch('https://cat-fact.herokuapp.com/facts');
   const catsFacts = await response.json();
   console.log(catsFacts)
}
