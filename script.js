 const currentTime = () => {
        let clockTime = new Date().toLocaleTimeString();
        document.getElementById("clockTime").innerText = clockTime;
    };

    const intervalId =  setInterval(() =>{
                currentTime();
            },1000);


// const intervalId =  setInterval(() =>{
//         currentTime();
//     },1000);

    // setTimeout(()=>{
    //     clearInterval(intervalId);
    // },10000);
