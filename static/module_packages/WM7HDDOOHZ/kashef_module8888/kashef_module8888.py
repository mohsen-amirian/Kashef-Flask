import os, json, requests

from AnyQt.QtWidgets import QFileDialog
from Orange.widgets.widget import OWWidget, Input, Output
from Orange.widgets import gui
from PyQt5.QtGui import QIntValidator, QDoubleValidator
from Orange.widgets.settings import Setting

from PyQt5.QtWidgets import QStyle


class OWClass(OWWidget):
    name = "ماژول 888"
    description = "<p>توضیحات ماژول شماره 88888</p>"
    icon = "icons/2222.svg"

    ws_url = "https://digiato.com/"

    want_main_area = False
    resizing_enabled = False

    class Outputs:
        pass
        ostanName = Output("لینک فایل", file)
        
    kashef_variable_layername = Setting(1)
    kashef_variable_urlPath_shx = Setting(2)
    
    class Inputs:
        layername = Input("طول جغرافیایی", int)
        urlPath_shx = Input("نام فایل shx", float)
        pass

    
    def __init__(self):
        super().__init__()
        self.kashef_variable_layername = None
        self.kashef_variable_urlPath_shx = None
        activation_button = gui.button(self.controlArea, self, 'ط§ط±ط³ط§ظ„', callback=self.ws_call, autoDefault=False)
    @Inputs.layername
    def set_layername(self, value):
        self.kashef_variable_layername = value
    
    @Inputs.urlPath_shx
    def set_urlPath_shx(self, value):
        self.kashef_variable_urlPath_shx = value
    
    def ws_call(self):
        self.clear_messages()
        if self.kashef_variable_layername is None or self.kashef_variable_urlPath_shx is None:
            self.Outputs.ostanName.send(None)
            
            pass
        else:
            try:
                res = requests.post(self.ws_url,
                        
                        data={"layername": self.kashef_variable_layername,"urlPath_shx": self.kashef_variable_urlPath_shx,
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
                self.Outputs.ostanName.send(result["ostanName"])
                
            elif res.status_code == 400:
                self.error(res.text)
                return
    
    
    