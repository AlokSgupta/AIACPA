<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Master/Page1.master" AutoEventWireup="true"
    CodeFile="Default.aspx.cs" Inherits="Default" %>

<asp:Content ID="Page1Col1" ContentPlaceHolderID="ContentPlacePage1Col1" runat="Server">
    <div class="indent">
        <span style="font-family: Arial, Helvetica, sans-serif; font-size: x-large">UPCOMING EVENTS</span>
        <img alt="" src="images/1title1.gif" class="title" />
        <asp:DataList ID="NewsItems" runat="server" CssClass="" RepeatDirection="Vertical" OnItemCommand="LatestNewsInfo_ItemCommand" RepeatColumns="1">
            <ItemTemplate>
                <img alt="" src="<%# DataBinder.Eval(Container.DataItem, "NewsLinkedImageName")%>"
                    class="indent_img" />
                <strong>
                    <%# DataBinder.Eval(Container.DataItem, "NewsDate", "{0:dd MMMM yyyy}")%></strong>
                <div class="p">
                    <strong>
                        <%# DataBinder.Eval(Container.DataItem, "NewsTitle")%></strong><br />
                    <%# DataBinder.Eval(Container.DataItem, "NewsHeading")%>
                    <a href="NewsDetails.aspx?ID=<%# DataBinder.Eval(Container.DataItem, "ID")%>">read more </a>
                </div>
                <br clear="all" />
                <div class="line_x">
                </div>
            </ItemTemplate>
        </asp:DataList>
	<span style="font-family: Arial, Helvetica, sans-serif; font-size: x-large"><br />Our Annual Sponsers</span><br />	
	 <table> 	
        <tr align="center">
            <td><img alt="Seven Hills" src="images/sevenhills.jpg" height="90" width="250" /></td>
        </tr>	
        <tr align="center">
            <td><img alt="IBS Logo" src="images/IBSLogo.png" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="Passage to India Logo" src="images/PTILogo.png" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="M Home Logo" src="images/mhomelogo.png" height="90" width="250" /></td>
        </tr>		
		
    </table>	
    </div>

</asp:Content>
<asp:Content ID="Page1Col2" ContentPlaceHolderID="ContentPlacePage1Col2" runat="Server">
<div class="">
    <span style="font-family: Arial, Helvetica, sans-serif; font-size: x-large">WELCOME</span><br />
    Asian Indian Americans of Central Pennsylvania ( AIACPA) was founded in 1991, is a nonpartisan, secular and a nonprofit organization. The organization was created with following five objectives:
    <a href="AboutUS.aspx">read more</a><br /><br />
	<span style="font-family: Arial, Helvetica, sans-serif; font-size: x-large"><br />Our Annual Sponsers</span><br />
</div>
	 <table> 
	 <!--
	     <tr align="center">
            <td><img alt="Hershy  Entertainment & Resort" src="images/herco_new.jpg" height="120" width="230" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Susquehanna Bank" src="images/SusquehannaBank.jpg" height="90" width="250" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Hersha" src="images/Hersha.png" height="90" width="120" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Dawood Engineering" src="images/Dawood.png" height="90" width="250" /></td>
        </tr> 
		<tr align="center">
            <td><img alt="Classic Communities" src="images/ClassicCommunities.jpg" height="90" width="150" /></td>
        </tr>
        <tr align="center">
            <td><img  alt="Shipley Energy" src="images/Shipley.png" height="90" width="250" /></td>
        </tr>
        <tr align="center">
            <td><img alt="IBS Logo" src="images/IBSLogo.png" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="Passage to India Logo" src="images/PTILogo.png" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="Pinnacle Health" src="images/PH_Proven.jpg" height="90" width="250" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Seven Hills" src="images/sevenhills.jpg" height="90" width="250" /></td>
        </tr>		
		-->
		<tr align="center">
            <td><img alt="Hershy  Entertainment & Resort" src="images/herco_new.jpg" height="120" width="230" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Susquehanna Bank" src="images/SusquehannaBank.jpg" height="90" width="250" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Hersha" src="images/Hersha.png" height="90" width="120" /></td>
        </tr>
        <tr align="center">
            <td><img alt="Dawood Engineering" src="images/Dawood.png" height="90" width="250" /></td>
        </tr> 
        <tr align="center">
            <td><img alt="Giant Food" src="images/giant.jpg" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="Pinnacle Health" src="images/PH_Proven.jpg" height="90" width="250" /></td>
        </tr>
		<tr align="center">
            <td><img alt="LPD" src="images/lpdeveloper.png height="90" width="250" /></td>
        </tr>
    </table>
	<!--
	<div class="wr_form">
        <form id="form" action="gdform.aspx" method="post" enctype="multipart/form-data" name="form">
        <span style="font-family: Arial, Helvetica, sans-serif; font-size: x-large; color: #FFFFFF;">NEWSLETTER</span>
        <div>
            <input type="text" value="&nbsp; enter your email" /><a href="#" onclick="document.getElementById('form').submit()">
			<span style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #FFFFFF;">Subscribe</span></a>
		</div>
        <a href="#">
        <span style="font-family: Arial, Helvetica, sans-serif; font-size: x-small; color: #FFFFFF;">unsubscribe</span></a>
        </form>
	</div>
	-->
</asp:Content>
<asp:Content ID="Footer" ContentPlaceHolderID="ContentPlacefooter" runat="Server"></asp:Content>
