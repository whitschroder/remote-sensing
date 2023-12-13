Search.setIndex({"docnames": ["aerial", "agisoft", "aster", "bands", "corona", "drones", "ethics", "gee", "geophys", "gpr", "intro", "lastools", "lidar", "lidr", "ml", "multispectral", "ndvi", "notebooks", "pan", "photogrammetry", "reality", "supervised", "week1", "week2", "week3"], "filenames": ["aerial.md", "agisoft.md", "aster.md", "bands.md", "corona.md", "drones.md", "ethics.md", "gee.md", "geophys.md", "gpr.md", "intro.md", "lastools.md", "lidar.md", "lidr.md", "ml.md", "multispectral.md", "ndvi.md", "notebooks.ipynb", "pan.md", "photogrammetry.md", "reality.md", "supervised.md", "week1.md", "week2.md", "week3.md"], "titles": ["Aerial Photography and Stereoscopic Imaging", "Digital Surface Models and Orthoimagery in Agisoft Metashape", "Topographic Analysis with ASTER and SRTM Digital Elevation Models", "Landsat Band Ratios", "Orthorectifying CORONA Satellite Imagery", "Drone Mission Planning for Photogrammetry", "Ethics in Remote Sensing", "Manipulating Remotely-Sensed Big Data in Google Earth Engine", "Subsurface Remote Sensing and Geophysics", "Ground Penetrating Radar", "ANG: 6930 Archaeological and Anthropological Remote Sensing", "Lidar Processing and Analysis with LAStools", "Lidar for Archaeology", "Visualizing and Processing Lidar Point Clouds in R with the lidR Package", "Machine Learning Approaches in Remote Sensing", "Multispectral Satellite Imagery", "Create a Normalized Difference Vegetation Index and Other Metrics", "Content with notebooks", "Pansharpening Imagery", "Aerial Photogrammetry: Digital Surface Models and Orthoimagery", "Digital Surface Models and Orthoimagery in Reality Capture", "Supervised and Unsupervised Land Cover Classification", "Week 1", "Week 2", "Week 3"], "terms": {"stereo": 0, "map": [0, 10, 13], "arcgi": [0, 3, 10, 11], "pro": [0, 3, 10, 11], "photo": [0, 3, 5, 10], "maker": 0, "download": [0, 3, 10], "tutori": [0, 10, 13], "metashap": [0, 10], "dale": [0, 10], "mark": 0, "r": [0, 3, 5, 10], "t": [0, 3, 13, 17], "mari": 0, "jos\u00e9": 0, "fortin": [0, 10], "2014": [0, 4, 10, 13], "chapter": [0, 13], "1": [0, 3, 4, 6, 10, 11, 13, 17], "spatial": [0, 1, 4, 10, 11, 13], "concept": 0, "notion": 0, "In": [0, 1, 3, 4, 10, 11, 13, 18], "analysi": [0, 3, 6, 10], "A": [0, 3, 4, 5, 6, 7, 10, 11, 13], "guid": [0, 5, 17], "ecologist": 0, "second": [0, 3, 11], "edit": [0, 3, 13, 18], "pp": [0, 3, 18], "31": [0, 3, 7, 10], "cambridg": 0, "univers": [0, 3, 10, 11], "press": [0, 3], "gajski": 0, "d": [0, 1, 3, 4, 10, 11, 13, 18], "\u017eupan": 0, "i": [0, 3, 10, 11, 13], "racetin": 0, "krsti\u0107": 0, "2023": [0, 4, 7, 13], "straightforward": 0, "techniqu": [0, 3, 10], "archaeometr": 0, "interpret": [0, 3, 10], "archeolog": [0, 11], "artifact": 0, "heritag": [0, 4], "6": [0, 3, 5, 10, 11, 13, 14], "5066": 0, "5081": 0, "http": [0, 1, 3, 4, 5, 6, 7, 10, 11, 13, 14], "doi": [0, 1, 4, 5, 6, 7, 11, 13, 14], "org": [0, 1, 4, 5, 6, 7, 11, 13, 14], "10": [0, 1, 3, 4, 5, 6, 7, 10, 11, 13, 14, 17, 18], "3390": [0, 5, 11, 13, 14], "heritage6070268": 0, "verhoeven": 0, "geert": 0, "j": [0, 1, 4, 7, 10, 11], "2009": 0, "provid": [0, 10, 13], "an": [0, 3, 4, 7, 10, 11, 13], "archaeolog": [0, 1, 3, 4, 5, 6, 7, 13, 14, 18], "bird": 0, "s": [0, 3, 4, 5, 6, 10, 11, 13, 17], "ey": 0, "view": [0, 10, 13], "overal": 0, "pictur": 0, "ground": [0, 10], "base": [0, 4, 6, 7, 11, 13], "mean": [0, 3, 13, 17], "execut": 0, "low": [0, 3, 4, 11, 13], "altitud": 0, "laap": 0, "prospect": [0, 4, 10], "16": [0, 3, 10, 13], "233": 0, "249": 0, "pdf": [0, 4, 6, 10, 11, 13], "thi": [1, 3, 4, 5, 10, 11, 13, 17], "lab": [1, 4, 5, 10, 11, 13], "student": [1, 5, 10, 13], "learn": [1, 3, 7, 10, 13], "how": [1, 5, 10, 13], "develop": [1, 10], "workflow": [1, 10], "previous": 1, "known": 1, "photoscan": 1, "load": [1, 3], "process": [1, 3, 10], "export": 1, "data": [1, 3, 4, 6, 10, 17], "from": [1, 3, 4, 10, 11, 13, 17], "aerial": [1, 4, 5, 10], "photograph": 1, "us": [1, 3, 4, 6, 7, 10, 11, 13, 14], "photogrammetri": [1, 10, 11, 13], "structur": [1, 10, 11, 13], "motion": [1, 10], "sfm": [1, 10, 13], "casana": [1, 4, 6], "jess": [1, 4, 6], "adam": 1, "wiewel": 1, "autumn": 1, "cool": 1, "austin": 1, "chad": 1, "hill": 1, "kevin": 1, "fisher": 1, "elis": [1, 6], "laugier": [1, 6], "2017": [1, 6], "advanc": [1, 4, 5, 14], "practic": [1, 4, 5, 14], "5": [1, 3, 4, 10, 11, 13, 17], "4": [1, 3, 5, 10, 11, 13, 17, 23, 24], "310": 1, "327": 1, "1017": [1, 4, 5, 14], "aap": [1, 4, 5, 14], "23": [1, 3], "print": [2, 8, 12, 13, 15, 16, 19, 20, 21, 22, 23, 24], "hello": [2, 8, 12, 15, 16, 19, 20, 21, 22], "world": [2, 4, 7, 8, 12, 15, 16, 19, 20, 21, 22], "usg": 3, "earth": [3, 10], "explor": [3, 4, 10], "anoth": [3, 10], "sourc": [3, 4, 10, 11, 13], "composit": 3, "visual": [3, 10], "differ": [3, 11, 13], "combin": [3, 11], "txt": 3, "raster": [3, 10, 11], "usual": [3, 13], "_________mtl": 3, "list": 3, "product": [3, 5, 13], "when": [3, 6, 10, 13], "ad": [3, 11], "bilinear": 3, "resampl": 3, "default": [3, 11, 13], "dra": 3, "can": [3, 10, 11, 13, 17], "improv": [3, 11, 13], "true": [3, 13], "color": [3, 13, 17], "3": [3, 4, 6, 10, 11, 13], "2": [3, 4, 10, 11, 13, 14, 24], "san": 3, "bartolo": 3, "parcak": 3, "egypt": 3, "www": [3, 6, 10, 11, 13], "esri": [3, 10], "com": [3, 10, 13], "blog": [3, 10], "8": [3, 10, 13], "gisgeographi": 3, "text": [3, 11], "The": [3, 4, 10, 11, 13], "two": 3, "main": 3, "sensor": [3, 5, 10, 11], "30": [3, 10, 13], "60": [3, 10], "meter": [3, 11, 13], "resolut": [3, 7, 10, 13], "l3harrisgeospati": 3, "detail": 3, "artmid": 3, "10198": 3, "articleid": 3, "15691": 3, "mani": [3, 13], "openweath": 3, "co": [3, 13], "uk": 3, "post": [3, 10, 17], "satellit": [3, 6, 7, 10], "its": 3, "research": [3, 10, 13], "keep": [3, 10, 11, 13, 17], "mind": 3, "each": [3, 10, 13], "mission": [3, 10], "ha": [3, 10, 11, 13], "code": [3, 10, 13], "7": [3, 10, 11, 13], "etm": 3, "\u00b5m": 3, "oli": 3, "tir": 3, "m": [3, 5, 11, 13], "coastal": 3, "aerosol": 3, "0": [3, 11, 13, 17], "435": 3, "451": 3, "blue": [3, 13], "441": 3, "514": 3, "452": 3, "512": 3, "green": [3, 13], "519": 3, "601": 3, "533": 3, "590": 3, "red": [3, 13], "631": 3, "692": 3, "636": 3, "673": 3, "nir": 3, "772": 3, "898": 3, "851": 3, "879": 3, "swir": 3, "547": 3, "749": 3, "566": 3, "651": 3, "12": [3, 6, 10, 13], "36": 3, "100": [3, 10, 11, 17], "11": [3, 4, 6, 10, 13], "19": [3, 13], "50": [3, 7, 13], "51": [3, 6], "064": 3, "345": 3, "107": 3, "294": [3, 10], "15": [3, 10, 11, 13], "pan": 3, "515": 3, "896": 3, "503": 3, "676": 3, "cirru": 3, "363": 3, "384": 3, "9": [3, 10, 11, 13, 14], "comput": [3, 6], "also": [3, 10, 11, 13, 17], "highlight": 3, "featur": [3, 10, 13], "follow": [3, 10, 11, 13], "spectral": [3, 10], "reflect": 3, "curv": 3, "show": [3, 13], "high": [3, 7, 13], "valu": [3, 11, 13], "materi": 3, "wavelength": 3, "abov": [3, 13], "below": 3, "credit": [3, 5, 10], "elimin": [3, 13], "issu": [3, 13], "discern": 3, "shadow": 3, "area": [3, 5, 10, 13], "imag": [3, 10, 13, 17], "decidu": 3, "conifer": 3, "forest": [3, 10], "have": [3, 10, 11, 13], "sunlit": 3, "vs": 3, "shade": [3, 13], "calcul": [3, 11], "discrep": 3, "fix": [3, 17], "middleburi": 3, "remot": [3, 4, 11, 13, 18], "sens": [3, 4, 5, 11, 13, 18], "ar": [3, 10, 11, 13], "divid": 3, "specif": [3, 10, 13], "same": [3, 11, 13], "especi": [3, 13], "other": [3, 10, 11, 13], "neutral": 3, "veget": [3, 10, 11, 13], "soil": [3, 10], "water": [3, 13], "multipl": [3, 11], "tool": [3, 10, 11], "qgi": [3, 10, 11], "rgb": [3, 13], "creat": [3, 10, 11, 13, 17], "new": [3, 4, 6, 7, 11, 13, 18], "multiband": 3, "track": 3, "order": 3, "which": [3, 11, 13], "determin": [3, 13], "displai": [3, 13], "symbolog": 3, "window": [3, 13], "sharpen": 3, "all": [3, 7, 11], "except": 3, "panchromat": 3, "higher": [3, 13], "first": [3, 10, 11, 13], "you": [3, 10, 11, 13, 17], "need": [3, 10, 13], "alwai": [3, 13], "necessari": [3, 13], "help": [3, 13], "landscap": [3, 10, 13], "scale": [3, 4], "more": [3, 11, 13, 17], "info": 3, "princip": [3, 6], "compon": [3, 6, 10], "brovei": 3, "transform": 3, "done": 3, "envi": [3, 10], "gener": [3, 6, 10, 11], "variabl": 3, "through": [3, 10, 13], "sever": [3, 10, 13, 18], "iter": [3, 13], "less": [3, 13], "run": [3, 11, 13], "individu": [3, 11, 13], "select": [3, 10, 11, 13], "number": [3, 11, 13], "do": [3, 13, 17], "enter": 3, "filetyp": 3, "extens": [3, 10, 11], "after": [3, 10, 13], "filenam": 3, "want": [3, 11, 13, 17], "produc": [3, 13], "contain": 3, "manual": 3, "folder": [3, 11, 13], "go": 3, "plugin": [3, 11], "manag": [3, 13], "instal": 3, "search": 3, "semi": [3, 6], "automat": 3, "classif": [3, 7, 10], "There": [3, 17], "should": 3, "now": [3, 11, 13], "scp": 3, "menu": [3, 10], "try": [3, 13], "restart": 3, "don": [3, 13], "see": [3, 13, 17], "under": [3, 10, 11], "click": 3, "set": [3, 11, 13], "singl": [3, 13], "mai": [3, 10], "refresh": 3, "make": [3, 10, 13, 17], "sure": [3, 17], "your": [3, 10, 11, 13, 17], "layer": 3, "content": 3, "basic": [3, 11], "algorithm": [3, 10, 11, 13], "weight": [3, 13], "equal": 3, "If": [3, 10, 11, 13], "re": [3, 13], "work": [3, 10, 11, 13, 17], "exampl": [3, 11, 13, 17], "dem": [3, 13], "type": [3, 11], "weigh": 3, "cell": [3, 13], "zonal": 3, "statist": [3, 13], "onli": [3, 11, 13], "slightli": [3, 11], "haven": 3, "notic": [3, 13], "signific": [3, 11], "exact": 3, "pca": 3, "choos": [3, 13], "note": 3, "were": 3, "pretti": 3, "third": 3, "almost": 3, "ident": 3, "textur": 3, "Not": [3, 13], "ani": 3, "built": [3, 13], "open": [3, 10, 11, 13], "grass": 3, "bar": 3, "option": [3, 11, 13], "appear": 3, "input": [3, 11], "measur": [3, 10, 11], "method": [3, 10, 11, 13], "var": [3, 7], "varianc": 3, "size": [3, 11, 13], "move": [3, 13], "must": [3, 10, 11], "odd": 3, "integ": 3, "output": [3, 11, 13], "indic": [3, 10], "ndvi": 3, "normal": [3, 13], "index": [3, 11, 13], "repres": [3, 13], "file": [3, 10, 11, 13], "dropdown": 3, "altern": [3, 10, 13], "formula": 3, "final": [3, 10, 11, 13], "pca1": 3, "pca2": 3, "pca3": 3, "principl": [3, 10], "1st": 3, "2nd": 3, "3rd": 3, "vi": 3, "visibl": 3, "ir": 3, "infrar": [3, 13], "sb": 3, "x": [3, 13], "neighborhood": 3, "chowdhuri": 3, "schneider": 3, "2004": 3, "recommend": [3, 13], "southern": 3, "yucatan": 3, "griffin": [3, 7], "2012": [3, 4], "pet\u00e9n": 3, "autom": [3, 4, 6, 7], "supervis": [3, 10], "unsupervis": [3, 10], "land": [3, 10], "possibl": [3, 10, 13], "wizard": 3, "left": 3, "right": 3, "southeastern": 3, "chiapa": 3, "mexico": [3, 11], "17": [3, 10, 13], "corner_ul_lat": 3, "95093": 3, "corner_ul_lon": 3, "91": [3, 6], "54527": 3, "center": [3, 10], "preliminari": [3, 10], "light": 3, "healthi": 3, "dark": 3, "recent": [3, 4], "burn": 3, "greenish": 3, "white": [3, 13], "lower": [3, 10], "whitish": 3, "agricultur": 3, "brown": 3, "murki": 3, "urban": 3, "bare": 3, "bright": 3, "sandi": 3, "beach": [3, 14], "magenta": 3, "expos": 3, "bedrock": 3, "variou": 3, "shorelin": 3, "immedi": 3, "chang": [3, 10], "amidon": 3, "Will": 3, "youtub": 3, "channel": [3, 13], "ucgnxu17k63e2fzwxyv1": 3, "_4w": 3, "rinku": 3, "roi": 3, "laura": 3, "cover": [3, 10], "integr": [3, 10], "scienc": [3, 7, 11, 18], "tropic": 3, "deforest": 3, "frontier": [3, 4], "ed": 3, "b": [3, 10, 11, 13], "l": [3, 10, 11, 13, 18], "turner": 3, "ii": [3, 17], "jacquelin": 3, "geoghegan": 3, "david": 3, "foster": 3, "105": 3, "143": 3, "oxford": 3, "garrison": [3, 18], "thoma": [3, 18], "g": [3, 7, 11, 13, 18], "stephen": [3, 18], "houston": [3, 18], "charl": [3, 7, 13, 18], "golden": [3, 7, 18], "takeshi": [3, 18], "inomata": [3, 18], "zachari": [3, 18], "nelson": [3, 18], "jessica": [3, 18], "munson": [3, 18], "2008": [3, 18], "journal": [3, 4, 6, 7, 18], "35": [3, 10, 18], "2770": [3, 18], "2777": [3, 18], "robert": [3, 7, 13], "edward": 3, "carri": 3, "capac": 3, "ancient": 3, "maya": [3, 6], "swidden": 3, "maiz": 3, "cultiv": 3, "case": [3, 10], "studi": [3, 10], "region": [3, 4], "around": [3, 13], "guatemala": 3, "unpublish": 3, "phd": 3, "dissert": [3, 10], "pennsylvania": 3, "state": [3, 17], "saturno": [3, 18], "william": [3, 13, 18], "daniel": [3, 7, 18], "e": [3, 10, 11, 13, 18], "irwin": [3, 18], "burgess": [3, 18], "f": [3, 10, 18], "howel": [3, 18], "2007": [3, 18], "jame": [3, 13, 18], "wiseman": [3, 18], "farouk": [3, 18], "el": [3, 18], "baz": [3, 18], "137": [3, 18], "160": [3, 18], "springer": [3, 18], "york": [3, 18], "involv": 4, "georeferenc": [4, 10], "orthorectif": [4, 10], "approach": [4, 10], "archaeometri": 4, "applic": [4, 5, 6, 10, 13], "Near": [4, 6], "east": 4, "eastern": [4, 6], "77": [4, 10], "171": 4, "175": 4, "jstor": 4, "2020": [4, 6, 7, 13], "global": 4, "crowd": 4, "expert": 4, "led": 4, "field": 4, "45": [4, 13], "1080": [4, 13], "00934690": [4, 13], "1713285": 4, "jackson": 4, "cothren": 4, "2013": 4, "atla": 4, "project": [4, 10], "primer": 4, "space": [4, 11, 13], "observ": [4, 10, 13], "40th": 4, "anniversari": 4, "convent": 4, "springerbrief": 4, "tuna": 4, "kalayci": 4, "sword": 4, "ploughshar": 4, "internet": [4, 7], "32": 4, "11141": [4, 7], "ia": [4, 7], "goodman": 4, "c": [4, 7, 10, 11, 13], "ferwerda": 4, "wall": 4, "road": [4, 13], "investig": 4, "fortif": 4, "rome": 4, "antiqu": [4, 6], "18": [4, 13], "15184": [4, 6], "aqi": [4, 6], "153": 4, "lindsai": 4, "ian": 4, "arshalui": 4, "mkrtchyan": 4, "free": [4, 10, 11, 13], "cost": 4, "overview": 4, "south": 4, "caucasu": 4, "164": 4, "183": 4, "teach": 5, "flight": [5, 11, 13], "photogrammetr": 5, "digit": [5, 10], "surfac": [5, 10], "model": [5, 10], "orthorectifi": [5, 10], "imageri": [5, 6, 7, 10], "luna": 5, "et": [5, 13], "al": [5, 13], "2022": 5, "skycatch": 5, "isaac": 5, "ragab": 5, "p": [5, 11, 13], "campoi": 5, "flore": 5, "pe\u00f1a": 5, "molina": 5, "fast": [5, 13], "multi": 5, "uav": [5, 11, 13], "path": [5, 11], "optim": 5, "coverag": 5, "22": [5, 13], "2297": 5, "s22062297": 5, "olson": 5, "kyle": 5, "lynn": 5, "rous": 5, "2018": [5, 6, 11], "beginn": [5, 13], "mesoscal": 5, "survei": [5, 7], "quadrotor": 5, "system": [5, 11, 13], "357": 5, "371": 5, "26": 5, "berman": 6, "gabriel": 6, "sara": 6, "de": [6, 11], "la": [6, 10, 11, 13], "rosa": 6, "tanya": 6, "accon": 6, "consider": [6, 10], "geospati": 6, "technolog": [6, 11], "evid": 6, "unicef": 6, "florenc": 6, "irc": 6, "public": [6, 10, 13], "dp": 6, "02": 6, "2015": [6, 11], "loot": 6, "syria": 6, "78": 6, "142": 6, "152": 6, "jakobi": 6, "monitor": 6, "site": [6, 10], "damag": 6, "syrian": 6, "civil": 6, "war": 6, "plo": 6, "ONE": 6, "e0188589": 6, "1371": 6, "pone": 6, "0188589": 6, "chase": 6, "adrian": 6, "z": [6, 11, 13], "dian": 6, "arlen": 6, "coloni": 6, "lidar": [6, 10, 14], "decad": 6, "appic": 6, "62": [6, 10], "5334": 6, "jcaa": 6, "43": [6, 13], "cohen": 6, "anna": 6, "sarah": 6, "klassen": 6, "damian": 6, "evan": 6, "76": [6, 10], "48": 6, "lauricella": 6, "anthoni": 6, "joshua": 6, "cannon": 6, "scott": 6, "brant": 6, "emili": 6, "hammer": 6, "detect": [6, 7, 13, 14], "afghanistan": 6, "multispectr": [6, 10, 11], "359": 6, "90": [6, 10], "aoi": 7, "geometri": 7, "alcov": 7, "firpi": 7, "omar": 7, "2016": 7, "review": [7, 10, 11], "42": 7, "herndon": 7, "kelsei": 7, "whittak": [7, 10], "schroder": [7, 10], "timothi": 7, "murtha": 7, "contrera": 7, "emil": 7, "cherrington": 7, "luwei": 7, "wang": 7, "alexandra": 7, "bazarski": 7, "van": 7, "kollia": 7, "archaeologist": 7, "updat": [7, 10, 13], "look": [7, 13], "progress": 7, "promis": 7, "report": 7, "104094": 7, "1016": 7, "jasrep": 7, "orengo": 7, "h": [7, 13, 14], "garcia": 7, "molsosa": 7, "2019": [7, 11], "brave": 7, "machin": [7, 10], "potsherd": 7, "drone": [7, 10, 13], "112": 7, "105013": 7, "ja": 7, "francesc": 7, "conesa": 7, "arnau": 7, "cameron": 7, "petri": 7, "mound": [7, 13], "multisensor": 7, "multitempor": 7, "pna": 7, "117": 7, "18240": 7, "18250": 7, "1073": 7, "2005583117": 7, "florida": [10, 11], "spring": 10, "2024": 10, "instructor": 10, "turlington": 10, "b129": 10, "352": 10, "6396": 10, "wschroder": 10, "ufl": 10, "edu": 10, "descript": 10, "collect": [10, 13], "scan": [10, 13], "larg": [10, 13], "distanc": [10, 13], "includ": [10, 13, 17], "topograph": 10, "hydrolog": 10, "3d": 10, "subsurfac": 10, "among": 10, "discuss": 10, "histori": 10, "theori": 10, "class": [10, 13], "dataset": [10, 13], "photographi": [10, 13], "laser": [10, 13], "radar": 10, "thermal": 10, "environment": 10, "addit": [10, 13], "assess": [10, 13], "preprocess": 10, "analyz": 10, "address": 10, "ethic": 10, "conduct": 10, "object": 10, "By": 10, "end": [10, 13, 17], "abl": 10, "explain": 10, "fundament": 10, "disciplin": 10, "know": 10, "access": [10, 11], "becom": 10, "familiar": [10, 13], "across": [10, 13], "platform": 10, "agisoft": 10, "lastool": 10, "googl": 10, "engin": 10, "python": [10, 13], "evalu": 10, "analys": 10, "accuraci": [10, 13], "consid": 10, "ramif": 10, "challeng": 10, "face": 10, "twenti": 10, "centuri": 10, "prerequisit": 10, "some": [10, 11, 13, 17], "previou": 10, "knowledg": 10, "gi": 10, "benefici": 10, "meet": 10, "wednesdai": 10, "period": 10, "am": 10, "2318": 10, "offic": 10, "hour": 10, "00": 10, "pm": 10, "zoom": 10, "8991776578": 10, "requir": 10, "book": [10, 17], "tempfli": 10, "klau": 10, "norman": 10, "kerl": 10, "gerrit": 10, "huurneman": 10, "luca": 10, "janssen": 10, "editor": 10, "introductori": 10, "textbook": 10, "webapp": 10, "itc": 10, "utwent": 10, "nl": 10, "librarywww": 10, "papers_2009": 10, "principlesremotesens": 10, "avail": [10, 11, 13], "onlin": 10, "read": 10, "week": 10, "grade": 10, "93": 10, "87": 10, "89": 10, "79": 10, "67": 10, "69": 10, "92": 10, "83": 10, "86": 10, "73": 10, "63": [10, 13], "66": 10, "80": 10, "82": 10, "70": 10, "72": 10, "catalog": [10, 13], "ugrd": 10, "academ": 10, "regul": 10, "polici": 10, "attend": 10, "particip": 10, "abstract": 10, "peer": 10, "feedback": 10, "crucial": 10, "get": [10, 13], "most": [10, 13], "out": [10, 13, 17], "miss": 10, "pleas": 10, "let": [10, 13], "me": 10, "email": 10, "person": 10, "soon": 10, "encourag": 10, "what": [10, 13], "my": 10, "depend": [10, 13], "activ": [10, 13], "assign": 10, "up": [10, 13], "engag": 10, "dure": 10, "lectur": [10, 13], "contribut": 10, "exam": 10, "consist": 10, "goal": [10, 13], "resourc": 10, "about": [10, 17], "bring": 10, "least": 10, "one": [10, 13], "outsid": 10, "choic": 10, "present": 10, "context": 10, "topic": 10, "everi": [10, 13], "introduc": 10, "continu": [10, 13], "portfolio": 10, "throughout": 10, "semest": 10, "ideal": 10, "relat": 10, "thesi": 10, "kml": 10, "next": [10, 11], "phase": [10, 13], "craft": 10, "question": 10, "propos": 10, "would": 10, "realist": 10, "plan": 10, "acquir": [10, 11], "classmat": 10, "prior": 10, "submiss": 10, "honesti": 10, "honor": 10, "sccr": 10, "dso": 10, "special": 10, "accommod": 10, "request": 10, "describ": 10, "disabl": 10, "start": [10, 13], "regist": 10, "reid": 10, "hall": 10, "letter": 10, "expect": 10, "profession": 10, "respect": 10, "qualiti": [10, 13], "instruct": 10, "complet": 10, "via": 10, "gatorev": 10, "guidanc": 10, "give": 10, "manner": 10, "aa": 10, "notifi": 10, "thei": 10, "receiv": 10, "canva": 10, "bluera": 10, "summari": [10, 13], "result": [10, 11, 13], "januari": 10, "introduct": 10, "pattern": 10, "gp": 10, "gnss": 10, "lkc": 10, "ch": 10, "foundat": 10, "stereoscop": 10, "take": 10, "24": 10, "control": 10, "point": [10, 11], "due": 10, "orthophoto": 10, "cloud": [10, 11], "interpol": [10, 13], "februari": 10, "elev": [10, 11], "14": [10, 13], "leverag": 10, "histor": 10, "corona": 10, "21": 10, "landsat": 10, "band": 10, "ratio": 10, "28": 10, "march": 10, "big": 10, "decis": 10, "tree": [10, 13], "random": [10, 11, 17], "manipul": 10, "13": [10, 13, 14], "break": 10, "20": [10, 13], "lidr": [10, 11], "packag": 10, "27": 10, "deriv": 10, "april": 10, "tensorflow": 10, "colab": 10, "geophys": 10, "penetr": 10, "guest": 10, "dai": 10, "orthoimageri": 10, "aster": 10, "srtm": 10, "pansharpen": 10, "canada": 10, "centr": 10, "nrcan": 10, "gc": 10, "ca": [10, 13], "earthscienc": 10, "tutor": 10, "fundam": 10, "fundamentals_": 10, "learngi": 10, "hub": 10, "page": 10, "glanc": 10, "conveni": 11, "power": 11, "laz": [11, 13], "format": [11, 13], "subscript": 11, "softwar": [11, 13], "while": 11, "restrict": 11, "alter": 11, "diagnon": 11, "line": [11, 13, 17], "toolbox": 11, "prefer": 11, "gui": 11, "standalon": 11, "ex": 11, "own": 11, "howev": [11, 13], "directli": 11, "command": [11, 13], "prompt": 11, "full": [11, 13], "To": [11, 13], "begin": [11, 13, 17], "rapidlasso": 11, "custom": 11, "support": 11, "unzip": 11, "drive": 11, "so": [11, 13], "bin": 11, "For": [11, 13, 17], "we": [11, 13], "gatorey": 11, "link": [11, 13], "june": 11, "onc": [11, 13], "copi": 11, "ltz": 11, "raw": 11, "organ": 11, "merg": 11, "them": 11, "togeth": 11, "thin": 11, "navig": 11, "add": 11, "cd": 11, "refer": [11, 13], "lasmerg": 11, "readm": 11, "wild": 11, "o": [11, 13], "epsg": 11, "defin": [11, 13], "coordin": [11, 13], "vertical_wgs84": 11, "vertic": 11, "datum": 11, "cpu64": 11, "perform": [11, 13], "larger": [11, 13], "per": [11, 13], "las2la": 11, "32615": 11, "ltzmerg": 11, "cpu": 11, "64": [11, 13], "step": [11, 13], "equival": 11, "maximum": 11, "densiti": [11, 13], "over": [11, 13], "sqrt": 11, "lowest": 11, "highest": [11, 13], "last_onli": 11, "last": [11, 13], "return": [11, 13], "lasthin": 11, "ltzthin": 11, "randomli": 11, "could": [11, 13], "These": [11, 13], "nois": [11, 13], "detriment": 11, "just": [11, 13], "assum": [11, 13], "well": [11, 17], "exercis": [11, 13], "lasoptim": 11, "remov": 11, "unnecessari": 11, "reorder": 11, "coher": 11, "do_not_zero_user_data": 11, "user": [11, 13], "sometim": 11, "import": [11, 17], "inform": [11, 13, 17], "ltzoptim": 11, "assist": 11, "lax": 11, "our": [11, 13], "lasindex": 11, "similar": [11, 13], "retil": [11, 13], "befor": [11, 13], "appli": [11, 13], "tile": 11, "unit": [11, 13], "tile_s": 11, "250": 11, "width": [11, 13], "buffer": [11, 13], "25": [11, 13], "revers": 11, "allow": 11, "later": [11, 13], "odir": 11, "directori": 11, "ola": 11, "lastil": 11, "natur": 11, "wilder": 11, "fine": [11, 13], "substep": 11, "extra_fin": 11, "hyper_fin": 11, "veri": [11, 13], "steep": 11, "terrain": [11, 13], "core": 11, "parallel": 11, "lasground_new": 11, "reverse_til": 11, "ltzground": 11, "blast2dem": 11, "keep_class": [11, 13], "ltzwild": 11, "tif": [11, 13], "kashani": 11, "alireza": 11, "michael": 11, "olsen": 11, "christoph": 11, "parrish": 11, "nichola": 11, "wilson": 11, "radiometr": 11, "hoc": 11, "intens": [11, 13], "correct": 11, "rigor": 11, "calibr": 11, "28099": 11, "28128": 11, "s151128099": 11, "scaioni": 11, "h\u00f6fle": 11, "baungarten": 11, "kerst": 11, "barazzetti": 11, "previtali": 11, "wujanz": 11, "extract": [11, 13], "intern": 11, "archiv": 11, "52": 11, "1503": 11, "1510": 11, "int": 11, "arch": 11, "photogramm": 11, "sen": 11, "inf": [11, 13], "sci": 11, "net": 11, "xlii": 11, "ispr": 11, "proceed": 13, "latest": 13, "version": 13, "studio": 13, "posit": 13, "rstudio": 13, "desktop": 13, "advantag": 13, "name": 13, "drawback": 13, "program": 13, "languag": 13, "slower": 13, "than": 13, "rstoolbox": 13, "terra": 13, "rgdal": 13, "ggplot": 13, "ggplot2": 13, "rcolorbrew": 13, "palett": 13, "time": 13, "orient": 13, "either": 13, "publicli": 13, "nasa": 13, "liht": 13, "brows": 13, "glihtdata": 13, "gsfc": 13, "gov": 13, "amigacarb_yuc_centro_glas_apr2013_l1s460": 13, "gz": 13, "zip": 13, "locat": 13, "string": 13, "readla": 13, "summar": 13, "header": 13, "v1": 13, "memori": 13, "gb": 13, "extent": 13, "277008": 13, "278391": 13, "2070914": 13, "2079175": 13, "xmin": 13, "xmax": 13, "ymin": 13, "ymax": 13, "coord": 13, "ref": 13, "wg": 13, "84": 13, "utm": 13, "zone": 13, "16n": 13, "km\u00b2": 13, "99": 13, "million": 13, "m\u00b2": 13, "puls": 13, "tabl": 13, "30522821": 13, "20462312": 13, "current": 13, "american": 13, "societi": 13, "aspr": 13, "standard": 13, "never": 13, "unclassifi": 13, "medium": [13, 17], "build": 13, "reserv": 13, "rail": 13, "wire": 13, "guard": 13, "shield": 13, "conductor": 13, "transmiss": 13, "tower": 13, "connector": 13, "insul": 13, "bridg": 13, "deck": 13, "255": 13, "been": 13, "further": 13, "etc": [13, 17], "focu": 13, "initi": 13, "non": 13, "aid": 13, "y": 13, "lasground": 13, "xyzcr": 13, "attribut": 13, "abbrevi": 13, "realiti": 13, "xyz": 13, "gpstime": 13, "angl": 13, "n": [13, 17], "synthet": 13, "flag": 13, "k": 13, "keypoint": 13, "w": 13, "withheld": 13, "overlap": 13, "u": 13, "id": 13, "edg": 13, "direct": 13, "scanner": 13, "waveform": 13, "546": 13, "mb": 13, "46": 13, "33": 13, "plot": [13, 17], "computation": 13, "dedic": 13, "like": 13, "compar": 13, "vox": 13, "voxelize_point": 13, "voxel": 13, "bg": 13, "jean": 13, "romain": 13, "roussel": 13, "tristan": 13, "goodbodi": 13, "piotr": 13, "tompalski": 13, "offer": 13, "cross": 13, "section": 13, "p1": 13, "277645": 13, "2074590": 13, "p2": 13, "277718": 13, "2074681": 13, "plot_crossect": 13, "colour_bi": 13, "null": 13, "rlang": 13, "enquo": 13, "data_clip": 13, "clip_transect": 13, "ae": 13, "geom_point": 13, "coord_equ": 13, "theme_minim": 13, "crossect": 13, "scale_color_gradientn": 13, "colour": 13, "height": 13, "factor": 13, "fail": 13, "ll": 13, "pursu": 13, "limit": 13, "distribut": 13, "brewer": 13, "grid": 13, "squar": 13, "rasterize_dens": 13, "specifi": 13, "col": 13, "pal": 13, "bugn": 13, "colorramppalett": 13, "axi": 13, "better": 13, "densitygr": 13, "xlim": 13, "277400": 13, "278100": 13, "ylim": 13, "2074300": 13, "2074850": 13, "invert": 13, "becaus": 13, "rel": 13, "simpl": 13, "accept": 13, "dtm_idw": 13, "rasterize_terrain": 13, "knnidw": 13, "10l": 13, "hillshad": 13, "dtm_prod": 13, "v": 13, "slope": 13, "aspect": 13, "radian": 13, "dtm_hillshad": 13, "315": 13, "grai": 13, "legend": [13, 17], "fals": 13, "convex": 13, "hull": 13, "too": 13, "much": 13, "irregular": 13, "concav": 13, "polygon": 13, "forc": 13, "proper": 13, "uniform": 13, "coarser": 13, "ensur": 13, "gap": 13, "convert": 13, "den": 13, "reclassifi": 13, "slice": 13, "reclass": 13, "reclass_m": 13, "matrix": 13, "ncol": 13, "byrow": 13, "densreclass": 13, "na": 13, "densreclasssr": 13, "spatrast": 13, "lasspvect": 13, "lassf": 13, "sf": 13, "st_as_sf": 13, "lassfc": 13, "st_as_sfc": 13, "outlin": 13, "shapefil": 13, "shape": 13, "where": 13, "canopi": 13, "dsm": 13, "rasterize_canopi": 13, "p2r": 13, "circl": 13, "radiu": 13, "fill": 13, "subcircl": 13, "pkg": 13, "rm": 13, "els": 13, "focal": 13, "fun": 13, "smooth": 13, "although": 13, "wa": 13, "alreadi": 13, "seen": 13, "smaller": 13, "chunk": 13, "reload": 13, "lascat": 13, "readlascatalog": 13, "1600": 13, "opt_output_fil": 13, "amigacarb_yuc_centro_glas_apr2013": 13, "BE": 13, "s460": 13, "xleft": 13, "_": 13, "ybottom": 13, "opt_chunk_buff": 13, "opt_chunk_s": 13, "small": 13, "catalog_retil": 13, "\u0161tular": 13, "lozi\u0107": 13, "paramet": 13, "experi": 13, "best": 13, "lastest": 13, "s460276800_2073600": 13, "flip": 13, "upsid": 13, "down": 13, "imagin": 13, "drape": 13, "paramat": 13, "rigid": 13, "graviti": 13, "back": 13, "error": 13, "prone": 13, "misclassifi": 13, "quickli": 13, "mycsf": 13, "sloop_smooth": 13, "class_threshold": 13, "cloth_resolut": 13, "500l": 13, "time_step": 13, "65": 13, "lascsf": 13, "classify_ground": 13, "still": 13, "correctli": 13, "1000l": 13, "75": 13, "lascsf2": 13, "top": 13, "flat": 13, "lead": 13, "noisei": 13, "pmf": 13, "within": 13, "certain": 13, "threshold": 13, "neighbor": 13, "sequenc": 13, "origin": 13, "increas": 13, "linearli": 13, "exponenti": 13, "significantli": 13, "reduc": 13, "potenti": 13, "highli": 13, "accur": 13, "nearli": 13, "infinit": 13, "experiment": 13, "difficult": 13, "refin": 13, "ws": 13, "seq": 13, "th": 13, "length": 13, "laspmf": 13, "fact": 13, "decreas": 13, "had": 13, "impact": 13, "found": 13, "vanvalkenburgh": 13, "colleagu": 13, "laspmf2": 13, "mcc": 13, "deviat": 13, "lasmcc": 13, "With": 13, "minor": 13, "tweak": 13, "even": 13, "lasmcc2": 13, "appropri": 13, "entir": 13, "again": 13, "Then": 13, "chunk_pattern": 13, "lasmccal": 13, "satisfi": 13, "writerast": 13, "s460gr": 13, "fernandez": 13, "diaz": 13, "juan": 13, "carlo": 13, "carter": 13, "ramesh": 13, "shrestha": 13, "craig": 13, "glenni": 13, "It": 13, "understand": 13, "airborn": 13, "mesoamerica": 13, "9951": 13, "10001": 13, "rs6109951": 13, "mohan": 13, "midhun": 13, "rodrigo": 13, "vieira": 13, "leit": 13, "eben": 13, "north": 13, "broadbent": 13, "2021": [13, 14], "forthcom": 13, "github": 13, "io": 13, "lidrbook": 13, "html": [13, 17], "benjamin": 13, "edisa": 13, "comparison": 13, "3025": 13, "rs12183025": 13, "parker": 13, "otherwis": 13, "ann": 13, "godfrei": 13, "routledg": 13, "london": 13, "taylorfr": 13, "4324": 13, "9781003087717": 13, "cushman": 13, "lui": 13, "jaim": 13, "castillo": 13, "butter": 13, "carol": 13, "roja": 13, "vega": 13, "carson": 13, "kepler": 13, "kellner": 13, "without": 13, "lost": 13, "citi": 13, "captur": 13, "architectur": 13, "complex": 13, "kuelap": 13, "amazona": 13, "peru": 13, "1713287": 13, "young": 13, "dummi": 13, "ibi": 13, "geog": 13, "ubc": 13, "cours": 13, "geog373": 13, "handout": 13, "lidarfordummi": 13, "bickler": 14, "simon": 14, "arriv": 14, "186": 14, "191": 14, "charact": 14, "leila": 14, "agustin": 14, "ortiz": 14, "jr": 14, "tim": 14, "sheryl": 14, "luzzadd": 14, "shipwreck": 14, "sonar": 14, "1759": 14, "rs13091759": 14, "jupyt": 17, "As": 17, "emb": 17, "add_": 17, "math": 17, "align": 17, "mbox": 17, "la_": 17, "tex": 17, "But": 17, "escap": 17, "dollar": 17, "sign": 17, "check": 17, "document": 17, "here": 17, "sampl": 17, "matplotlib": 17, "rcparam": 17, "cycler": 17, "pyplot": 17, "plt": 17, "numpi": 17, "np": 17, "ion": 17, "_ioncontext": 17, "0x1e681c33a00": 17, "reproduc": 17, "seed": 17, "19680801": 17, "logspac": 17, "randn": 17, "rang": 17, "arrai": 17, "cmap": 17, "cm": 17, "coolwarm": 17, "ax": 17, "prop_cycl": 17, "linspac": 17, "line2d": 17, "custom_lin": 17, "lw": 17, "fig": 17, "subplot": 17, "figsiz": 17, "cold": 17, "hot": 17, "lot": 17, "interact": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"aerial": [0, 19], "photographi": 0, "stereoscop": 0, "imag": 0, "read": [0, 1, 3, 4, 5, 6, 7, 9, 11, 13, 14, 18], "digit": [1, 2, 13, 19, 20], "surfac": [1, 13, 19, 20], "model": [1, 2, 13, 19, 20], "orthoimageri": [1, 19, 20], "agisoft": 1, "metashap": 1, "topograph": 2, "analysi": [2, 11], "aster": 2, "srtm": 2, "elev": [2, 13], "come": [2, 8, 12, 15, 16, 19, 20, 21, 22, 23, 24], "soon": [2, 8, 12, 15, 16, 19, 20, 21, 22, 23, 24], "citat": [2, 8, 12, 15, 16, 19, 20, 21, 22], "addit": [2, 8, 12, 15, 16, 19, 20, 21, 22], "link": [2, 8, 12, 15, 16, 19, 20, 21, 22], "landsat": 3, "band": 3, "ratio": 3, "pansharpen": [3, 18], "imageri": [3, 4, 15, 18], "orthorectifi": 4, "corona": 4, "satellit": [4, 15], "drone": 5, "mission": 5, "plan": 5, "photogrammetri": [5, 19], "ethic": 6, "remot": [6, 7, 8, 10, 14], "sens": [6, 7, 8, 10, 14], "manipul": 7, "big": 7, "data": [7, 11, 13], "googl": 7, "earth": 7, "engin": 7, "subsurfac": 8, "geophys": 8, "ground": [9, 11, 13], "penetr": 9, "radar": 9, "ang": 10, "6930": 10, "archaeolog": [10, 12], "anthropolog": 10, "cours": 10, "schedul": 10, "tabl": 10, "content": [10, 17], "bibliographi": 10, "lidar": [11, 12, 13], "process": [11, 13], "lastool": 11, "download": [11, 13], "pre": 11, "classif": [11, 13, 21], "visual": 13, "point": 13, "cloud": 13, "r": 13, "lidr": 13, "packag": 13, "instal": 13, "load": 13, "librari": 13, "import": 13, "gener": 13, "raster": 13, "cloth": 13, "simul": 13, "function": 13, "csf": 13, "progress": 13, "morpholog": 13, "filter": 13, "multiscal": 13, "curvatur": 13, "classifi": 13, "all": 13, "tile": 13, "lascatalog": 13, "machin": 14, "learn": 14, "approach": 14, "multispectr": 15, "creat": 16, "normal": 16, "differ": 16, "veget": 16, "index": 16, "other": 16, "metric": 16, "notebook": 17, "markdown": 17, "myst": 17, "code": 17, "block": 17, "output": 17, "realiti": 20, "captur": 20, "supervis": 21, "unsupervis": 21, "land": 21, "cover": 21, "week": [22, 23, 24], "1": 22, "2": 23, "3": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})