using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ywh_net_framework.Models
{
    public class User
    {
        public string Id{get; set; }
        public string UserName{get;  set;}
        public string Password{get;  set;}
        public string Email{get;  set;}
        public string HeadIcon{get;  set;}
        public string BirthDay{get;  set;}
        public string Age{get;  set;}
        public string RegisterDate{get;  set;}
        public string RegisterLoginIp{get;  set;}
        public string LastLoginDate{get;  set;}
        public string LastLoginIp { get; set; }

    }
}