
		function time() {
			let now = new Date();
			let h = now.getHours();
			let m = now.getMinutes();
			let s = now.getSeconds();
			let text = "AM";

              if (h > 12){
                 text = "PM";
              }
              h = (h < 10) ? "0" + h : h;
              m = (m < 10) ? "0" + m : m;
              s = (s < 10) ? "0" + s : s;
            let t = h + ":" + m + ":" + s + " " + text;
              document.getElementById("clock").innerText = t;
              setInterval(time, 1000);

		}

		time();


