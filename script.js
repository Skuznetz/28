function fun1() {
	var rtl=document.getElementBYId('rtl').value;
	var rtr=document.getElementBYId('rtr').value;
	var rbl=document.getElementBYId('rbl').value;
	var ttl=document.getElementBYId('ttl').value;
	var ttr=document.getElementBYId('ttr').value;
	var tbr=document.getElementBYId('tbr').value;
	var tbl=document.getElementBYId('tbl').value;
	var rbr=document.getElementBYId('rbr').value;

	var block=document.getElementById('block') ;

}
ttl.value = rtl;
ttr.value = rtr;
tbr.value = rbr;
tbl.value = rbl;
block.style.borderRadius = rtl + 'px'+rtr+'px' + rbr + 'px'+rbl + 'px';