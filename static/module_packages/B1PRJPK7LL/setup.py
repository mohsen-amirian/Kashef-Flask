
from setuptools import setup

setup(name="kashef_number10Module",
      packages=["kashef_number10Module"],
      package_data={"kashef_number10Module": ["icons/*.svg"]},
      classifiers=["Example :: Invalid"],
      entry_points={"orange.widgets": "عمران = kashef_number10Module"},
      )
