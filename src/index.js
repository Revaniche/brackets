module.exports = function check(str, bracketsConfig) {
    var op = [];
    var level = 0;
    var a=str;
   
    for (var i = 0; i < a.length; i++) {
        for (var j=0; j < bracketsConfig.length; j++) {
            if (a[i]==bracketsConfig[j][1]) {      
                if (op[level]==j) {        
                    level--
                } else {
                    if (a[i]==bracketsConfig[j][0]) {     
                        level++;
                        op[level] = j
                    } else {    
                         return false       
                    }
                }
            } else {
                if (a[i]==bracketsConfig[j][0]) {       
                    level++;
                    op[level] = j
                }
            }
        }
    }
    return (level==0);
}
