function upload() {
    const progressElement = document.getElementById('uploadProgress');
    const fileInput = document.getElementById("uploadInput");
    const su = new SmashUploader({ region: "us-east-1", 
         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTBhNmU0LTNhYmEtNDU1Yy04ODczLWZlYjA1OThmYjc4NS1ldSIsInVzZXJuYW1lIjoiMzA1NzdlMTAtZTc5OS00MTI4LWJiM2UtMDA5NDc0Y2JhM2E1IiwicmVnaW9uIjoidXMtZWFzdC0xIiwiaXAiOiIxODkuMzYuMjA1LjEzOCIsInNjb3BlIjoiTm9uZSIsImFjY291bnQiOiJjYzM1ZGQxZC1lNTVmLTRhZDktYTFhZi1mMDhhM2MxMmVhMDItZWEiLCJpYXQiOjE3MjQxMDE4MzQsImV4cCI6NDg3OTg2MTgzNH0.HDMZhQ53Z_3bNwDT0dYe7J3iwO6-Pzpb5BOC7A18Ftg" });

    progressElement.hidden = false;

    su.upload({ files: [...fileInput.files] })
        .then(transfer => {
             console.log("Transfer", transfer);
             progressElement.value = 100; 
            })
        .catch(error => {
             console.log("Error", error); 
             progressElement.hidden = true;
            });

            su.on('progress', (event) => {
                const progressData = event.data && event.data.progress;
               
                if (progressData && progressData.percent !== undefined) {
                    progressElement.value = progressData.percent;
                    console.log('Progress:', progressData.percent)
                } else {
                    console.log('deu merda')
                }
            })

    //su.on('progress', (event) => { console.log(event.data.progress.percent); });
}