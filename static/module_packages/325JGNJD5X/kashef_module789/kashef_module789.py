import os, json, requests

from AnyQt.QtWidgets import QFileDialog
from Orange.widgets.widget import OWWidget, Input, Output
from Orange.widgets import gui
from PyQt5.QtGui import QIntValidator, QDoubleValidator
from Orange.widgets.settings import Setting

from PyQt5.QtWidgets import QStyle


class OWClass(OWWidget):
    name = "ماژول 789"
    description = "<p>شرکت &laquo;لنوو&raquo; سری لپ&zwnj;تاپ&zwnj;های محبوب ThinkPad پانزده اینچی خود را به نسل جدید پردازنده&zwnj;های اینتل تحت عنوان KabyLake مجهز کرده و مدل &laquo;ThinkPad E580&raquo; را روانه&zwnj;ی بازار کرده است. این محصولات خوش&zwnj;ساخت به دلیل کیفیت خوبی که دارند، جزو محصولات رده&zwnj;ی کاربری صنعتی لنوو محسوب می&zwnj;شوند که البته برای استفاده&zwnj;های خانگی، اداری و حرفه&zwnj;ای هم مناسب هستند</p>"
    icon = "icons/new.svg"

    ws_url = "http://127.0.0.1:5000/555registermodule/"

    want_main_area = False
    resizing_enabled = False

    class Outputs:
        pass
        filename = Output("نام شهرستان", float)
        
    kashef_variable_exportformat = Setting("")
    
    class Inputs:
        pass

    
    def __init__(self):
        super().__init__()
        gui.lineEdit(self.controlArea, self, "kashef_variable_exportformat", "",
                     box="",
                     callback=self.kashef_variable_exportformat_changed,
                     valueType=str, validator=None)
        activation_button = gui.button(self.controlArea, self, 'ط§ط±ط³ط§ظ„', callback=self.ws_call, autoDefault=False)
    def ws_call(self):
        self.clear_messages()
        if self.kashef_variable_exportformat is None:
            self.Outputs.filename.send(None)
            
            pass
        else:
            try:
                res = requests.post(self.ws_url,
                        
                        data={"exportformat": self.kashef_variable_exportformat,
                        }, headers={"Content-Type": "multipart/form-data"},
                        
                    
                )
            except Exception as e:
                self.error(str(e))
                return
            if res.status_code == 200:
                result = json.loads(res.text)
                if "code" in result and result["code"] != 200:
                    self.error(result["message"])
                    return
                self.Outputs.filename.send(result["filename"])
                
            elif res.status_code == 400:
                self.error(res.text)
                return
    
    def kashef_variable_exportformat_changed(self):
        pass

    