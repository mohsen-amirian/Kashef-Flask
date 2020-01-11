
from setuptools import setup

setup(name="kashef_moduleee",
      packages=["kashef_moduleee"],
      package_data={"kashef_moduleee": ["icons/*.svg"]},
      classifiers=["Example :: Invalid"],
      entry_points={"orange.widgets": "برق = kashef_moduleee"},
      )
