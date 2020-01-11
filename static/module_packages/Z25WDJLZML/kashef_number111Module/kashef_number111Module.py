import os, json, requests

from AnyQt.QtWidgets import QFileDialog
from Orange.widgets.widget import OWWidget, Input, Output
from Orange.widgets import gui
from PyQt5.QtGui import QIntValidator, QDoubleValidator
from Orange.widgets.settings import Setting

from PyQt5.QtWidgets import QStyle


class OWClass(OWWidget):
    name = "ماژول شماره 10"
    description = "<p>صفحه&zwnj;نمایش 15.6 اینچی این مدل هم یک نمونه&zwnj;ی معمولی با پنل TFT و کیفیت HD است که معمولا در محصولات میان&zwnj;رده یا حتی رده&zwnj;پایین شاهد آن هستیم. خوش&zwnj;بختانه روکش این صفحه مات است که استفاده از آن را در شرایط و محیط&zwnj;های مختلف ممکن ساخته است. مهم&zwnj;ترین و بارزترین برتری این سری جدید در سخت&zwnj;افزار به&zwnj;روز آن است. این مدل مجهز به یک پردازنده&zwnj;ی Core i7 8550U &zwnj;از نسل جدید Kaby Lake R با فرکانس پایه&zwnj;ی 1.8 تا 4.0 گیگاهرتز و هشت مگابایت حافظه&zwnj;ی نهان (کش) است که جزو مدل&zwnj;های خوب در بین پردازنده&zwnj;های کم&zwnj;مصرف سری U به&zwnj;شمار می&zwnj;رود.</p>"
    icon = "icons/333_-_Copy.svg"

    ws_url = "https://digiato.com/"

    want_main_area = False
    resizing_enabled = False

    class Outputs:
        pass
        
    kashef_variable_workspacename = Setting(1)
    kashef_variable_param2 = Setting(2)
    
    class Inputs:
        workspacename = Input("پارامتر اول ساده", float)
        pass

    
    def __init__(self):
        super().__init__()
        self.kashef_variable_workspacename = None
        gui.lineEdit(self.controlArea, self, "kashef_variable_param2", "نام فایل روی سرور",
                     box="",
                     callback=self.kashef_variable_param2_changed,
                     valueType=int, validator=QIntValidator())
        activation_button = gui.button(self.controlArea, self, 'ط§ط±ط³ط§ظ„', callback=self.ws_call, autoDefault=False)
    @Inputs.workspacename
    def set_workspacename(self, value):
        self.kashef_variable_workspacename = value
    
    def ws_call(self):
        self.clear_messages()
        if self.kashef_variable_workspacename is None or self.kashef_variable_param2 is None:
            
            pass
        else:
            try:
                res = requests.post(self.ws_url,
                        
                        data={"workspacename": self.kashef_variable_workspacename,"param2": self.kashef_variable_param2,
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
                
            elif res.status_code == 400:
                self.error(res.text)
                return
    
    
    def kashef_variable_param2_changed(self):
        pass

    