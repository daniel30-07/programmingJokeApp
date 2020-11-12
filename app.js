const joke = document.getElementById('jokes');
const btn = document.querySelector('button');
let isNewJoke = true;

const addNewJoke = async () => {
    if(!isNewJoke){
        joke.innerHTML = ""
        isNewJoke = true
    }
    const jokeLI = await getJoke();
    const setup = document.createElement('LI');
    setup.append(jokeLI.setup)
    const punchline = document.createElement('LI');
    punchline.append(jokeLI.punchline)
    joke.append(setup)
    setTimeout(() => joke.append(punchline), 2000)
    isNewJoke = false
}

const getJoke = async () => {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
    return response.data[0];
}

addNewJoke();
btn.addEventListener('click', addNewJoke);
