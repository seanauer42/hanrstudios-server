let s = document.getElementById("sidebar")
s.innerHTML = `<br><a href="../767-reccurent">767 Reccurrent</a>
	<br><hr><a href="../767-etops">767 ETOPS</a>
 	<br><hr><a href="../777-recurrent">777 Recurrent</a>
  	<br><hr><a href="../777-etops">777 ETOPS</a>
   	<br><hr><a href="../777-rvsm-line-mx-exam">777 RVSM Line Mx Exam</a>

	<br><hr><a href="../abbreviated-air-quality">Abbreviated Air Quality</a>
 	<br><hr><a href="../active-threat-awareness">Active Threat Awareness</a>
  	<br><hr><a href="../airbus-assessment">Airbus Assessment</a>
   	<br><hr><a href="../aircraft-security">Aircraft Security</a>
       	<br><hr><a href="../aml-eaml-training">AML EAML training</a>
   	<br><hr><a href="../cash-program">Cash Program</a>
    	<br><hr><a href="../crew-rest-module">Crew Rest Module</a>
       	<br><hr><a href="../dangerous-goods-awareness">Dangerous Goods Awareness</a>
   	<br><hr><a href="../environmental-above-ground-storage-tanks">Environmental Above Ground Storage Tanks</a>
       	<br><hr><a href="../etops-awareness">ETOPS Awareness</a>
   	<br><hr><a href="../etops-initial">ETOPS Initial</a>
       	<br><hr><a href="../ewis-housekeeping">EWIS Housekeeping</a>
	<br><hr><a href="../ewis-inspection-and-human-factors">EWIS Inspection and Human Factors</a>
    	<br><hr><a href="../ewis-introduction">EWIS Introduction</a>
   	<br><hr><a href="../ewis-wiring-practices">EWIS Wiring Practices</a>
   	<br><hr><a href="../ewis">EWIS</a>
   	<br><hr><a href="../fire-extinguisher">Fire Extinguisher</a>
    	<br><hr><a href="../fod-awareness">FOD Awareness</a>
   	<br><hr><a href="../fuel-service-form">Fuel Service Form</a>
   	<br><hr><a href="../general-ewis-practices">General EWIS Practices</a>
   	<br><hr><a href="../harness-lanyard-and-srl-prior-to-use-inspection">Harness Lanyard and SRL Prior to Use Inspection</a>
   	<br><hr><a href="../hazardous-awareness">Hazardous Awareness</a>
   	<br><hr><a href="../heat-illness-prevention-plan">Heat Illness Prevention</a>
   	<br><hr><a href="../information-security-and-data-privacy">Information Security and Data Privacy</a>
	<br><hr><a href="../llm-awareness">LLM Awareness</a>
	<br><hr><a href="../managing-waste">Managing Waste</a>
 	<br><hr><a href="../melcdl">MEL/CDL</a>
	<br><hr><a href="../personal-protective-equipment">Personal Protective Equipment</a>
	<br><hr><a href="../rii-far-initial">RII FAR Initial</a>
	<br><hr><a href="../rii-recurrent">RII Recurrent</a>
	<br><hr><a href="../rvsm-awareness">RVSM Awareness</a>
	<br><hr><a href="../scaffold-training">Scaffold Training</a>
	<br><hr><a href="../sling-inspection">Sling Inspection</a>
	<br><hr><a href="../spill-response-and-water-protection">Spill Response and Water Protection</a>
	<br><hr><a href="../technician-environmental-training">Technician Environmental Training</a>
	<br><hr><a href="../workplace-violence">Workplace Violence</a>

	`
	
let stringTitle = ""
let title = window.location.href
title = title.split(/(\\|\/)/g).pop()
title = title.split(/(\-|\/)/g)
for (let i = 0; i < title.length; i++) {
	if (i%2 == 0) {
		stringTitle += title[i] + " "
	}
}

let titleHtml = document.getElementById("title")
titleHtml.innerText = stringTitle
