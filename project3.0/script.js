const accordian = document.getElementsByClassName('container-content');
for( i=0 ; i<accordian.length;i++){

    accordian[i].addEventListener('click',function run(){
        this.classList.toggle('active');
    })
};