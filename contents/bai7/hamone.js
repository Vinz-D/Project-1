export function hamOne(){
    const tab = document.querySelectorAll("html");
    [...tab].forEach
    (item => 
    {
      item.setAttribute("data-color-scheme", 'light');
    }
    );
}

export function hamTwo(a,b){
     return a + b;
};