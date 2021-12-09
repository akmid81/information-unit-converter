const bitCalc = document.querySelector('.bitCalc');
const basic = bitCalc.querySelector('#basic');
const opt = bitCalc.querySelector('#opt');

const [biV,kbiV,mbiV,gbiV,tbiV] = [1,1024,1048576,1073741824,1099511627776];
const [bV,kbV,mbV,gbV,tbV] = [8,8192,8388608,8589934592,8796093022208];

bitCalc.addEventListener('input', changeData);

function changeData(e) {
   let tVal = e.target.value;

   let baseV = (e.target.id == "basic" || e.target.id == "opt") ? basic.value * opt.value 
      : (e.target.id == "bit") ? tVal * biV
      : (e.target.id == "kbit") ? tVal * kbiV
      : (e.target.id == "mbit") ? tVal * mbiV
      : (e.target.id == "gbit") ? tVal * gbiV
      : (e.target.id == "tbit") ? tVal * tbiV
      : (e.target.id == "b") ? tVal * bV
      : (e.target.id == "kb") ? tVal * kbV
      : (e.target.id == "mb") ? tVal * mbV
      : (e.target.id == "gb") ? tVal * gbV
      : (e.target.id == "tb") ? tVal * tbV
      : 0;

   baseV = Math.abs(baseV);
   
   displayResult();

   function displayResult() {
      basic.value = baseV / opt.value;
      bitCalc.querySelector('#bit').value = baseV; 
      bitCalc.querySelector('#kbit').value = baseV / kbiV;
      bitCalc.querySelector('#mbit').value = baseV / mbiV;
      bitCalc.querySelector('#gbit').value = baseV / gbiV;
      bitCalc.querySelector('#tbit').value = baseV / tbiV;
      bitCalc.querySelector('#b').value = baseV / bV;
      bitCalc.querySelector('#kb').value = baseV / kbV;
      bitCalc.querySelector('#mb').value = baseV / mbV;
      bitCalc.querySelector('#gb').value = baseV / gbV;
      bitCalc.querySelector('#tb').value = baseV / tbV;
   }
}