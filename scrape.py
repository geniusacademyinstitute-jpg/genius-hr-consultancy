import urllib.request
import re
from collections import Counter

url = 'https://geniusacademyklbg.com/static/js/main.f0703279.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as js_response:
        js_content = js_response.read().decode('utf-8')
        tw_classes = re.findall(r'className[:=]\s*["\']([^"\']+)["\']', js_content)
        
        # look for typical button classes
        btn_candidates = [c for c in tw_classes if 'px-' in c and 'py-' in c]
        print('Button/Pill class strings (Sample 10):')
        for c in list(set(btn_candidates))[:10]:
            print(c)

except Exception as e:
    print('Error:', e)
