using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Runtime.Serialization;
using System.ComponentModel;

    public class AlbumImageObj : INotifyPropertyChanged //INotifyPropertyChanging, 
    {
        //private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
        private string _ImageSource;
        private string _Title;
        private System.Nullable<System.DateTime> _DateCreated;
        private string _Album;
        private int _ImageId;


        #region Extensibility Method Definitions
        //partial void OnLoaded();
        //partial void OnValidate(System.Data.Linq.ChangeAction action);
        //partial void OnCreated();
        //partial void OnImageSourceChanging(string value);
        //partial void OnImageSourceChanged();
        //partial void OnTitleChanging(string value);
        //partial void OnTitleChanged();
        //partial void OnDateCreatedChanging(System.Nullable<System.DateTime> value);
        //partial void OnDateCreatedChanged();
        //partial void OnAlbumChanging(string value);
        //partial void OnAlbumChanged();
        //partial void OnImageIdChanging(int value);
        //partial void OnImageIdChanged();
        #endregion

        //public event PropertyChangedEventHandler PropertyChanged;
        public string ImageSource
        {
            get
            {
                return this._ImageSource;
            }
            set
            {
                if ((this._ImageSource != value))
                {
                    //this.OnImageSourceChanging(value);
                    //this.SendPropertyChanging();
                    this._ImageSource = value;
                    //this.PropertyChanged.Notify(() => this._ImageSource);
                    this.SendPropertyChanged("ImageSource");
                    //this.OnImageSourceChanged();
                }
            }
        }

        public string Title
        {
            get
            {
                return this._Title;
            }
            set
            {
                if ((this._Title != value))
                {
                    //this.OnTitleChanging(value);
                    //this.SendPropertyChanging();
                    this._Title = value;
                    this.SendPropertyChanged("Title");
                    //this.OnTitleChanged();
                }
            }
        }

        public System.Nullable<System.DateTime> DateCreated
        {
            get
            {
                return this._DateCreated;
            }
            set
            {
                if ((this._DateCreated != value))
                {
                    //this.OnDateCreatedChanging(value);
                    //this.SendPropertyChanging();
                    this._DateCreated = value;
                    this.SendPropertyChanged("DateCreated");
                    //this.OnDateCreatedChanged();
                }
            }
        }

        public string Album
        {
            get
            {
                return this._Album;
            }
            set
            {
                if ((this._Album != value))
                {
                    //this.OnAlbumChanging(value);
                    //this.SendPropertyChanging();
                    this._Album = value;
                    this.SendPropertyChanged("Album");
                    //this.OnAlbumChanged();
                }
            }
        }

        public int ImageId
        {
            get
            {
                return this._ImageId;
            }
            set
            {
                if ((this._ImageId != value))
                {
                    //this.OnImageIdChanging(value);
                    //this.SendPropertyChanging();
                    this._ImageId = value;
                    this.SendPropertyChanged("ImageId");
                    //this.OnImageIdChanged();
                }
            }
        }

        // public event PropertyChangingEventHandler PropertyChanging;
        public event PropertyChangedEventHandler PropertyChanged;
        //protected virtual void SendPropertyChanging()
        //{
        //    if ((this.PropertyChanging != null))
        //    {
        //        this.PropertyChanging(this, emptyChangingEventArgs);
        //    }
        //}

        protected virtual void SendPropertyChanged(String propertyName)
        {
            if ((this.PropertyChanged != null))
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }


    }