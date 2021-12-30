import pandas as pd
import re
from bs4 import BeautifulSoup

import requests

nyu_stats_link = "https://www.nyu.edu/life/safety-health-wellness/coronavirus-information/covid-19-data.html"

columns = ['all_test_conducted', 'positive_test', 'positivity_rate', 'time']

df = pd.DataFrame(columns=columns)

p = requests.get(nyu_stats_link)
dom = BeautifulSoup(p.text, "html.parser")
data = dom.select('nyucolumncontrol testData')

print(data)

