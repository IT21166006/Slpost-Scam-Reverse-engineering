var xmlhttp;
if (window.XMLHttpRequest)
  xmlhttp=new XMLHttpRequest();
else
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

function tsw_show (stat, plugin_url, blog_url) {

  document.getElementById("tsw_stats_title").innerHTML = '<img src="'+plugin_url+'" title="Loading Stats" alt="Loading Stats" border="0">';
  xmlhttp.onreadystatechange=tsw_change_stat;
  xmlhttp.open("GET",blog_url+"/wp-admin/admin-ajax.php?action=tswstats&reqstats="+stat,true);
  xmlhttp.send(); 
}

function tsw_change_stat () {

  if (xmlhttp.readyState==4 && xmlhttp.status==200) {

     var rt = xmlhttp.responseText;
     var tswdata = rt.split('~');
     console.log(tswdata);
     document.getElementById("tsw_stats_title").innerHTML = ''//tswdata[0];
     document.getElementById("tsw_lds").innerHTML = tswdata[1];
     document.getElementById("tsw_lws").innerHTML = tswdata[2];
     document.getElementById("tsw_lms").innerHTML = tswdata[3];

  }
}
