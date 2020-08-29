 #!/bin/bash
 # Shell Script que renomeia todos os arquivos do diretório atual terminados em ".png", 
 # de forma que o nome do arquivo comece com a data atual no formato "YYYY-MM-DD"
 
  DAY=$(date +%F)
  FILES='ls *.png'
  for FILE in $FILES
   do
      mv $FILE ${DAY}-${FILE}
   done