using System;
using System.Collections.Generic;
//using System.Linq;
using System.Web;
using System.Web.Mail;

    /// <summary>
    /// Send emails from application
    /// </summary>
    public static class SendeMailClass
    {



        public static void sendmail(string mbody)
        {
            const string SERVER = "relay-hosting.secureserver.net";
            MailMessage oMail = new System.Web.Mail.MailMessage();
            oMail.From = "contactus@aiacpa.org";
            oMail.To = "upmittal@theakanksha.com";
            //oMail.To = "upmittal@theakanksha.com,gupta411@yahoo.com,rpangarkar@yahoo.com,lochanp@hotmail.com";
            oMail.Subject = "Form 2013 Annual Registration Submit on the web site";
            oMail.BodyFormat = MailFormat.Html; // enumeration
            oMail.Priority = MailPriority.High; // enumeration
            oMail.Body = "Sent at: " + DateTime.Now + mbody;
            SmtpMail.SmtpServer = SERVER;
            

            //string mes = string.Empty;
            //string sTo = "upmittal@hotmail.com,aia93@hotmail.com,atreia@gmail.com";
            //string sFrom = "MedicalSummit@centralpaitsummit.com";
            //string sSubject = "Contactus from Medical Summit";
            //string sBody = mbody.Trim();
            //string sMailServer = "127.0.0.1";

            //MailMessage MyMail = new MailMessage();
            //MyMail.From = sFrom;
            //MyMail.To = sTo;
            ////MyMail.Cc
            //MyMail.Subject = sSubject;
            //MyMail.Body = sBody;

            //MyMail.BodyEncoding = System.Text.Encoding.UTF8;
            //MyMail.BodyFormat = MailFormat.Html;

            //SmtpMail.SmtpServer = sMailServer;
            try
            {
                SmtpMail.Send(oMail);
                oMail = null; // free up resources
                //mes += " Trying to send e-mail.";
                //SmtpMail.Send(MyMail);
                //MyMail = null;
                //mes += " The message was sent to " + MyMail.To;
                //mes += " ";
                //Response.Redirect(host_url);
                //MakeMessage(true, mes);
            }
            catch (Exception ex)
            {
                //mes += " " + ex.Message;
                //mes += " The tests failed.";
                //MakeMessage(false, mes);
                //Response.Redirect(host_url);
            }
        }

        public static void sendmail(string mbody, string mTo)
        {
            const string SERVER = "relay-hosting.secureserver.net";
            string mes = string.Empty;
            string sTo = mTo;
            string sFrom = "contactus@aiacpa.org";
            string sSubject = "Registration Card";
            string sBody = mbody.Trim();
            string sMailServer = SERVER;

            MailMessage MyMail = new MailMessage();
            MyMail.From = sFrom;
            MyMail.To = sTo;
            //MyMail.Cc
            MyMail.Subject = sSubject;
            MyMail.Body = sBody;

            MyMail.BodyEncoding = System.Text.Encoding.UTF8;
            MyMail.BodyFormat = MailFormat.Html;

            SmtpMail.SmtpServer = sMailServer;
            try
            {
                //mes += " Trying to send e-mail.";
                SmtpMail.Send(MyMail);
                MyMail = null;
                mes += " The message was sent to " + MyMail.To;
                mes += " ";
                //Response.Redirect(host_url);
                //MakeMessage(true, mes);
            }
            catch (Exception ex)
            {
                mes += " " + ex.Message;
                mes += " The tests failed.";
                //MakeMessage(false, mes);
                //Response.Redirect(host_url);
            }
        }

        public static void sendmail(string mbody, string mTo, string mSub)
        {
            const string SERVER = "relay-hosting.secureserver.net";
            string mes = string.Empty;
            string sTo = mTo;
            string sFrom = "contactus@aiacpa.org";
            string sSubject = mSub;
            string sBody = mbody.Trim();
            string sMailServer = SERVER;

            MailMessage MyMail = new MailMessage();
            MyMail.From = sFrom;
            MyMail.To = sTo;
            //MyMail.Cc
            MyMail.Subject = sSubject;
            MyMail.Body = sBody;

            MyMail.BodyEncoding = System.Text.Encoding.UTF8;
            MyMail.BodyFormat = MailFormat.Html;

            SmtpMail.SmtpServer = sMailServer;
            try
            {
                //mes += " Trying to send e-mail.";
                SmtpMail.Send(MyMail);
                MyMail = null;
                mes += " The message was sent to " + MyMail.To;
                mes += " ";
                //Response.Redirect(host_url);
                //MakeMessage(true, mes);
            }
            catch (Exception ex)
            {
                mes += " " + ex.Message;
                mes += " The tests failed.";
                //MakeMessage(false, mes);
                //Response.Redirect(host_url);
            }
        }

    }