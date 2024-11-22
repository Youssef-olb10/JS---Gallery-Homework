/*Name this external file gallery.js*/

function upDate(previewPic){
 let div = document.getElementById("image");
    div.style.backgroundImage = `url('${previewPic.src}')`;  
    div.innerHTML = previewPic.alt;
  
	}

	function unDo(){
    let div = document.getElementById("image");
    div.style.backgroundImage = `url('')`;  
    
     div.innerHTML = "Hover over an image below to display here.";
    
		
	}
