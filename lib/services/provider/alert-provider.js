class AlertProvider{
    constructor(
        alertElements = {
            title : '', 
            imgUrl : '', 
            content : '',
            cancelButton : true,
            submitButton : false, 
            submitParam : '',
            submitCaption : 'submit'
        }){
        this.alertElements = alertElements;
    }


    openAlert(){
        addAlertStyle();
        let appBody = document.getElementById('mainBody');
        var alertTag = alertViews(this.alertElements.imgUrl, this.alertElements.title, this.alertElements.content, this.alertElements.cancelButton, this.alertElements.submitButton, this.alertElements.submitParam, this.alertElements.submitCaption);
        appBody.innerHTML += alertTag;
        var alertTagElement = document.getElementById('myModal');
        setTimeout(()=>fadein(alertTagElement), 500);
        return console.log('Alert: '+this.alertElements.title);
    }

    closeAlert(){
        var alertTagElement = document.getElementById('myModal');
        var alertStyle = document.getElementById('alert-id');
        fadeOut(alertTagElement);
        setTimeout(()=> alertTagElement.remove(), 1000);
        // setTimeout(()=> alertStyle.remove(), 1000);

        return console.log('alert has been removed..')
    }
}


function alertViews(img, title, content, cancelButton, submitButton, submitParam, submitCaption){
    let alertTag = '<div id="myModal" class="modal">';
    alertTag += '<div class="modal-container">';
    alertTag += '<div class="modal-head">';
    alertTag += '<span class="close header-close" cancel>&times;</span>';
    alertTag += '<p class="modal-title">'+title+'</p>';
    alertTag += '</div>';
    alertTag += '<div class="modal-content">';
    alertTag += '<div class="row-grid">';
    alertTag += '<img class="modal-content-img" src="/assets/images/'+img+'">';
    alertTag += '<div class="modal-content-deskriptor">'+content+'</div>';
    alertTag += '</div>';
    alertTag += '</div>';
    alertTag += '<div class="modal-footer modal-ops">';
    cancelButton ? alertTag += '<button class="close modal-cancel" cancel>Cancel</button>' : alertTag += '';
    submitButton ? alertTag += '<button class="modal-submit" '+submitParam+'>'+submitCaption+'</button>' : alertTag += '';
    alertTag += '</div>';
    alertTag += '</div>';
    alertTag += '</div>';
    return alertTag;
}

function addAlertStyle(){
    var style = '.modal{display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);} .modal-container{background-color: #ffffff; max-width: 450px; max-height: 500px; margin: 10% auto 10% auto;} .modal-head{margin: auto; width: 100%; height: calc(100vh - 80rem);  padding: 3% 0px 2% 0px; } .modal-title{margin-left: 10%;} .modal-content{ margin: auto; padding: 20px 20px 20px 0px; width: 80%;} .modal-content-img{max-width: 40%; max-height: 40%; width: auto; height: auto;} .modal-footer{margin: auto; padding: 20px; width: 80%; height: calc(100vh - 60rem);} .modal-footer.modal-ops{text-align: -webkit-right;} .row-grid{display: inline-flex;} .column-grid{display: inline-grid;} .close{color: #aaaaaa; font-size: auto;} .header-close{color: #aaaaaa; float: right; font-size: 28px; font-weight: bold; margin-right: 10%;} .header-close:focus{ color: #000; text-decoration: none; cursor: pointer;} .header-close:hover{color: #000; text-decoration: none; cursor: pointer;} .modal-submit{border-radius: 5px; background-color: white; color: #008080; border: 2px solid #008080; width: 100px; height: 40px; margin: 5px;} .modal-cancel{border-radius: 5px; background-color: white; color: #d6b179; border: 2px solid #d6b179; width: 100px; height: 40px; margin: 5px;} .modal-submit:hover{ border-radius: 5px; background-color: #008080; color: white; width: 100px; height: 40px;} .modal-cancel:hover{ border-radius: 5px; background-color: #d6b179; color: white; width: 100px; height: 40px;} .modal-content-deskriptor{margin-top: 3%;}';
    var head = document.head || document.getElementsByTagName('head')[0];
    var styleTag = document.createElement('style');
    styleTag.setAttribute('id',"alert-id");
   
    
    document.querySelector('style') ? () => {} : head.appendChild(styleTag);
    // styleTag.type = 'text/css';
    if(styleTag.styleSheet){
        styleTag.styleSheet.cssText = style;
    } else {
        styleTag.innerHTML = style;
    }
}

function fadein(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

export default AlertProvider;