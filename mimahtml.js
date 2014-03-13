/**
 *File: mimahtml.js
 *Version: 1.0
 *Last Revision: 09-03-2014
 *Author: David Gallie
 *Website: http://mimasoftware.com
 *Description: This javascript file provides numerous functions to output html elements easily without cluttering your code.
 *License: Free for both commercial and non-commercial use.
 **/
 
 
 /********************
  *The basic elements.
  ********************/
  function msDocType(attrs)
  {
	var dthtml = '<!DOCTYPE ' + attrs + ' >';
	return dthtml;
  }
  
  function msHtml(attrs)
  {
	var hthtml = '<html>' + attrs + '</html>';
	return hthtml;
  }
  
  function msTitle(attrs)
  {
	var thtml = '<title>'+attrs+'</title>';
	return thtml;
  }
  
  function msBody(attrs,style,content)
  {
	var bhtml = '<body ';
	bhtml += msISB(attrs);
	bhtml += msISBStyles(style);
	bhtml += '>';
	bhtml += content + '</body>';
	return bhtml;
  }
  
  function msH1(attrs, style,content)
  {
	var hhtml = '<h1 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h1>';
	return hhtml;
  }
  
  function msH2(attrs, style,content)
  {
	var hhtml = '<h2 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h2>';
	return hhtml;
  }
  
  function msH3(attrs, style,content)
  {
	var hhtml = '<h3 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h3>';
	return hhtml;
  }
  
  function msH4(attrs,style,content)
  {
	var hhtml = '<h4 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h4>';
	return hhtml;
  }
  
  function msH5(attrs,style,content)
  {
	var hhtml = '<h5 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h5>';
	return hhtml;
  }
  
  function msH6(attrs,style,content)
  {
	var hhtml = '<h6 '+msISB(attrs)+msISBStyles+'>';
	hhtml += msContentCheck(content);
	hhtml += '</h6>';
	return hhtml;
  }
  
  function msP(attrs,style,content)
  {
	var phtml = '<p '+msISB(attrs)+msISBStyles+'>';
	phtml += msContentCheck(content);
	phtml += '</p>';
	return phtml;
  }
  
  function msBr(attrs, style)
  {
	var brhtml = '<br '+msISB(attrs)+msISBStyles+' />';
	return brhtml;
  }
  
  function msHr(attrs, style)
  {
	var phtml = '<hr '+msISB(attrs)+msISBStyles+'>';
	return phtml;
  }
  
  function msComment(content)
  {
	var phtml = '<!-- '+content+' -->';
	return phtml;
  }
  
  /********************
   *Formatting.
   ********************/
   	function msAcro(attrs,style,content)
	{
		var ihtml = '<acronym '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</acronym>';
		return ihtml;
	}
	
	function msAbbr(attrs,style,content)
	{
		var ihtml = '<abbr '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</abbr>';
		return ihtml;
	}
	
	function msAddress(attrs,style,content)
	{
		var ihtml = '<address '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</address>';
		return ihtml;
	}
	
	function msB(attrs,content)
	{
		var ihtml = '<b '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</b>';
		return ihtml;
	}
	
	function msBdi(attrs,style,content)
	{
		var ihtml = '<bdi '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</bdi>';
		return ihtml;
	}
	
	function msBdo(attrs,style,content)
	{
		var ihtml = '<bdo '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</bdo>';
		return ihtml;
	}
	
	function msBig(attrs,style,content)
	{
		var ihtml = '<big '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</big>';
		return ihtml;
	}
	
	function msBlockquote(attrs,style,content)
	{
		var ihtml = '<blockquote '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</blockquote>';
		return ihtml;
	}
	
	function msCenter(attrs,style,content)
	{
		var ihtml = '<center '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</center>';
		return ihtml;
	}
	
	function msCite(attrs,style,content)
	{
		var ihtml = '<cite '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</cite>';
		return ihtml;
	}
	
	function msCode(attrs,style,content)
	{
		var ihtml = '<code '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</code>';
		return ihtml;
	}
	
	function msDel(attrs,style,content)
	{
		var ihtml = '<del '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</del>';
		return ihtml;
	}
	
	function msDfn(attrs,style,content)
	{
		var ihtml = '<dfn '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</dfn>';
		return ihtml;
	}
	
	function msEm(attrs,style,content)
	{
		var ihtml = '<em '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</em>';
		return ihtml;
	}
	
	function msFont(attrs,style,content)
	{
		var ihtml = '<font '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</font>';
		return ihtml;
	}
	
	function msI(attrs,style,content)
	{
		var ihtml = '<i '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</i>';
		return ihtml;
	}
	
	function msIns(attrs,style,content)
	{
		var ihtml = '<ins '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</ins>';
		return ihtml;
	}
	
	function msKbd(attrs,style,content)
	{
		var ihtml = '<kbd '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</kbd>';
		return ihtml;
	}
	
	function msMark(attrs,style,content)
	{
		var ihtml = '<mark '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</mark>';
		return ihtml;
	}
	
	function msMeter(attrs,style,content)
	{
		var ihtml = '<meter '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</meter>';
		return ihtml;
	}
	
	function msPre(attrs,style,content)
	{
		var ihtml = '<pre '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</pre>';
		return ihtml;
	}
	
	function msProgress(attrs,style,content)
	{
		var ihtml = '<progress '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</progress>';
		return ihtml;
	}
	
	function msQ(attrs,style,content)
	{
		var ihtml = '<q '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</q>';
		return ihtml;
	}
	
	function msRp(attrs,style,content)
	{
		var ihtml = '<rp '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</rp>';
		return ihtml;
	}
	
	function msRt(attrs,style,content)
	{
		var ihtml = '<rt '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</rt>';
		return ihtml;
	}
	
	function msRuby(attrs,style,content)
	{
		var ihtml = '<ruby '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</ruby>';
		return ihtml;
	}
	
	function msS(attrs,style,content)
	{
		var ihtml = '<s '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</s>';
		return ihtml;
	}
	
	function msSamp(attrs,style,content)
	{
		var ihtml = '<samp '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</samp>';
		return ihtml;
	}
	
	function msSmall(attrs,style,content)
	{
		var ihtml = '<small '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</small>';
		return ihtml;
	}
	
	function msStrike(attrs,style,content)
	{
		var ihtml = '<strike '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</strike>';
		return ihtml;
	}
	
	function msStrong(attrs,style,content)
	{
		var ihtml = '<strong '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</strong>';
		return ihtml;
	}
	
	function msSub(attrs,style,content)
	{
		var ihtml = '<sub '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</sub>';
		return ihtml;
	}
	
	function msSup(attrs,style,content)
	{
		var ihtml = '<sup '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</sup>';
		return ihtml;
	}
	
	function msTime(attrs,style,content)
	{
		var ihtml = '<time '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</time>';
		return ihtml;
	}
	
	function msTT(attrs,style,content)
	{
		var ihtml = '<tt '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</tt>';
		return ihtml;
	}
	
	function msU(attrs,style,content)
	{
		var ihtml = '<u '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</u>';
		return ihtml;
	}
	
	function msVar(attrs,style,content)
	{
		var ihtml = '<var '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</var>';
		return ihtml;
	}
	
	function msWbr(attrs,style,content)
	{
		var ihtml = '<wbr '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</wbr>';
		return ihtml;
	}
   
   /********************
    *Forms.
	********************/
	function msForm(attrs,style,content)
	{
		var fhtml = '<form '+msISB(attrs) + msISBStyles(style) + '>';
		fhtml += msContentCheck(content);
		fhtml += '</form>';
		return fhtml;
	}
	
	function msInput(attrs, style)
	{
		var ihtml = '<input '+msISB(attrs) + msISBStyles(style) + '>';
		return ihtml;
	}
	
	function msTextArea(attrs,style,content)
	{
		var tahtml = '<textarea '+msISB(attrs) + msISBStyles(style) + '>';
		tahtml += msContentCheck(content);
		tahtml += '</textarea>';
		return tahtml;
	}
	
	function msButton(attrs,style,content)
	{
		var html = '<button '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</button>';
		return html;
	}
	
	function msSelect(attrs,style,content)
	{
		var html = '<select '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</select>';
		return html;
	}
	
	function msOption(attrs, value, text)
	{
		var html = '<option '+msISB(attrs) + 'value="'+value+'"' + '>';
		html += text;
		html += '</option>';
		return html;
	}
	
	function msOptGroup(attrs,content)
	{
		var html = '<optgroup '+msISB(attrs) +'>';
		html += msContentCheck(content);
		html += '</optgroup>';
		return html;
	}
	
	function msLabel(attrs,style,content)
	{
		var html = '<label '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</label>';
		return html;
	}
	
	function msFieldset(attrs,style,content)
	{
		var html = '<fieldset '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</fieldset>';
		return html;
	}
	
	function msLegend(attrs,style,content)
	{
		var html = '<legend '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</legend>';
		return html;
	}
	
	function msDatalist(attrs,style,content)
	{
		var html = '<datalist '+msISB(attrs) + msISBStyles(style) + '>';
		html += msContentCheck(content);
		html += '</datalist>';
		return html;
	}
	
	function msDataOption(attrs,value)
	{
		var html = '<option '+msISB(attrs) + 'value="'+value+'"' + '>';
		return html;
	}
	
	function msKeygen(attrs)
	{
		var html = '<keygen '+msISB(attrs) + '>';
		return html;
	}
	
	function msOutput(attrs,value)
	{
		var html = '<output '+msISB(attrs) + '>';
		html += '</output>';
		return html;
	}
	
	/********************
	 *Frames.
	 *******************/
	function msIFrame(attrs,style,content)
	{
		var ihtml = '<iframe '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</iframe>';
		return ihtml;
	}
	
	/********************
	 *Images.
	 *******************/
	function msImg(attrs, style)
	{
		var ihtml = '<img '+msISB(attrs) + msISBStyles(style) + '>';
		return ihtml;
	}
	
	function msMap(attrs, content)
	{
		var ihtml = '<map '+msISB(attrs) +'>';
		ihtml += msContentCheck(content);
		ihtml += '</map>';
		return ihtml;
	}
	
	function msArea(attrs,content)
	{
		var ihtml = '<area '+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</area>';
		return ihtml;
	}
	
	function msCanvas(attrs)
	{
		var ihtml = '<canvas '+msISB(attrs) +'>';
		ihtml += '</canvas>';
		return ihtml;
	}
	
	function msFigure(attrs,style,content)
	{
		var ihtml = '<figure '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</figure>';
		return ihtml;
	}
	
	function msFigCaption(attrs,style,content)
	{
		var ihtml = '<figcaption '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</figcaption>';
		return ihtml;
	}
	
	function msFigure(attrs,style,content)
	{
		var ihtml = '<figure '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</figure>';
		return ihtml;
	}
	
	/********************
	 *Audio/Video
	 *******************/
	function msAudio(attrs,content)
	{
		var ihtml = '<audio controls '+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</audio>';
		return ihtml;
	}
	
	function msSource(attrs)
	{
		var ihtml = '<source '+msISB(attrs) + '>';
		return ihtml;
	}
	
	function msTrack(attrs)
	{
		var ihtml = '<track '+msISB(attrs) + '>';
		return ihtml;
	}
	
	function msVideo(attrs,content)
	{
		var ihtml = '<video controls '+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</video>';
		return ihtml;
	}
	
	/********************
	 *Links.
	 *******************/
	function msA(attrs,style,content)
	{
		var ihtml = '<a '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</a>';
		return ihtml;
	}
	
  function msLink(attrs)
  {
	var html = '<link ';
	html += msISB(attrs);
	html += ' />';
	
	return html;
	}
  
  	function msnav(attrs,style,content)
	{
		var ihtml = '<nav '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</nav>';
		return ihtml;
	}
	
	/********************
	 *Lists.
	 *******************/
	function msLi(attrs,style,content)
	{
		var ihtml = '<li '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</li>';
		return ihtml;
	}
	
	function msUl(attrs,style,content)
	{
		var ihtml = '<ul '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</ul>';
		return ihtml;
	}
	
	function msOl(attrs,style,content)
	{
		var ihtml = '<ol '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</ol>';
		return ihtml;
	}
	
	function msDl(attrs,style,content)
	{
		var ihtml = '<dl '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</dl>';
		return ihtml;
	}
	
	function msDd(attrs,style,content)
	{
		var ihtml = '<dd '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</dd>';
		return ihtml;
	}
	
	function msDt(attrs,style,content)
	{
		var ihtml = '<dt '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</dt>';
		return ihtml;
	}
	
	function msMenu(attrs,style,content)
	{
		var ihtml = '<menu '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</menu>';
		return ihtml;
	}
	
	function msCommand(attrs,style,content)
	{
		var ihtml = '<command '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</command>';
		return ihtml;
	}
	
	/********************
	 *Tables.
	 *******************/
	 
	function msColgroup(attrs,style,content)
	{
		var ihtml = '<colgroup '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</colgroup>';
		return ihtml;
	}
	
	function msCol(attrs,style,content)
	{
		var ihtml = '<col '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</col>';
		return ihtml;
	}
	
	function msTfoot(attrs,style,content)
	{
		var ihtml = '<tfoot '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</tfoot>';
		return ihtml;
	} 
	 
	function msTbody(attrs,style,content)
	{
		var ihtml = '<tbody '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</tbody>';
		return ihtml;
	}
	 
	function msThead(attrs,style,content)
	{
		var ihtml = '<thead'+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</thead>';
		return ihtml;
	}
	
	function msTd(attrs,style,content)
	{
		var ihtml = '<td '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</td>';
		return ihtml;
	}
	
	function msTr(attrs,style,content)
	{
		var ihtml = '<tr '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</tr>';
		return ihtml;
	}

	function msTh(attrs,style,content)
	{
		var ihtml = '<th '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</th>';
		return ihtml;
	}
	
	function msCaption(attrs,style,content)
	{
		var ihtml = '<caption '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</caption>';
		return ihtml;
	}
		 
	function msTable(attrs,style,content)
	{
		var ihtml = '<table '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</table>';
		return ihtml;
	}
	 /*******************
	  *Styles/Sections
	  ******************/
	  
	function msStyle(attrs)
	{
		var ihtml = '<style '+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</style>';
		return ihtml;
	}
	
	function msSpan(attrs,style,content)
	{
		var ihtml = '<span '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</span>';
		return ihtml;
	}
	
	function msHeader(attrs,style,content)
	{
		var ihtml = '<header'+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</header>';
		return ihtml;
	}
	
	function msFooter(attrs,style,content)
	{
		var ihtml = '<footer '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</footer>';
		return ihtml;
	}
	
	function msSection(attrs,style,content)
	{
		var ihtml = '<section '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</section>';
		return ihtml;
	}
	
	function msArticle(attrs,style,content)
	{
		var ihtml = '<article '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</article>';
		return ihtml;
	}
	
	function msAside(attrs,style,content)
	{
		var ihtml = '<aside '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</aside>';
		return ihtml;
	}
	
	function msDetails(attrs,style,content)
	{
		var ihtml = '<details '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</details>';
		return ihtml;
	}
	
	function msDialog(attrs,style,content)
	{
		var ihtml = '<dialog '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</dialog>';
		return ihtml;
	}
	
	function msSummary(attrs,style,content)
	{
		var ihtml = '<summary '+msISB(attrs) + msISBStyles(style) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</summary>';
		return ihtml;
	}
	
	function msDiv(attrs,style,content)
	   {
			var html = '<div ';
			html += msISB(attrs);
			html += msISBStyles(style);
			html += ' >';
			html += msContentCheck(content);
			html += '</div>';
			
			return html;
	   }
	   
	   /********************
	    *Meta.
		*******************/
	function msHead(content)
	{
		var ihtml = '<head>';
		ihtml += msContentCheck(content);
		ihtml += '</head>';
		return ihtml;
	}
	
	function msMeta(attrs)
	{
		var ihtml = '<meta '+msISB(attrs) +'>';
		return ihtml;
	}
	
	function msBase(attrs)
	{
		var ihtml = '<base '+msISB(attrs) +'>';
		return ihtml;
	}
	  
	  /******************
	   *Programming
	   *****************/
	function msScript(attrs)
	{
		var ihtml = '<script '+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</script>';
		return ihtml;
	}   
	
	function msNoScript(content)
	{
		var ihtml = '<noscript>';
		ihtml += msContentCheck(content);
		ihtml += '</noscript';
		return ihtml;
	}
	
	function msEmbed(attrs)
	{
		var ihtml = '<embed '+msISB(attrs) +'>';
		return ihtml;
	}
	
	function msObject(attrs,content)
	{
		var ihtml = '<object'+msISB(attrs) + '>';
		ihtml += msContentCheck(content);
		ihtml += '</object>';
		return ihtml;
	}
	
	function msparam(attrs)
	{
		var ihtml = '<param '+msISB(attrs) +'>';
		return ihtml;
	}
		

	  /**
	   *Create a skeleton html document.
	   **/
	   function msCreateDoc(title,headprops,bodyprops)
	   {
		 var html = '<html>'+'\n';
		 html += '<head>'+'\n';
		 html += '<title>'+'\n';
		 html += msContentCheck(title) +'\n';
		 html += '</title>' +'\n';
		 html += msContentCheck(headprops) +'\n';
		 html += '</head>' +'\n';
		 html += '<body>' +'\n';
		 html += msContentCheck(bodyprops) +'\n';
		 html += '</body>' +'\n';
		 html += '</html>' +'\n';
		 
		 return html;
	   }
	  
	  /**
	   *The functions below this point are used internally by the ones listed above and probably shouldn't be used on their own.
	   **/
	   
	   function msISB(obj)
	   {
			var str = '';
			if(typeof(obj) != "undefined")
			{
				for(prop in obj)
				{
					//check for the action property
					if(prop === 'action')
					{
						var astr = obj[prop].trim();
						if(astr.charAt(0) === "$")
						{
							str += prop + '="'+'<?php echo '+obj[prop]+'; ?>"';
						}
					}else{
					str += prop + '="' + obj[prop] + '" ';
				 }
				 
				}
			}
			return str;
	   }
	   
	   function msISBStyles(obj)
	   {
	      var str = 'style="';
		  if(typeof(obj) != "undefined"){
			  for(prop in obj)
			  {
				 str += prop + ':' + obj[prop] + '; ';
			  }
		  }
		  
		  str += '"';
		  return str;
	   }
	   
	   function msContentCheck(obj)
	   {
			if(typeof(obj) != "undefined")
			{
				return obj;
			}else{
				obj = '';
				return obj;
			}
	   }
