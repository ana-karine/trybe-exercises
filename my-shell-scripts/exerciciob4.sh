 #!/bin/bash

  DIRECTORY=$1    #recebe o diretório onde estão os arquivos que devem ser modificados
  EXTENSION=$2    #recebe a extensão dos arquivos que devem ser modificados 

  DAY=$(date +%F)

  cd $DIRECTORY   

  for FILE in `ls *.$EXTENSION`
   do
      echo "Renomeando $FILE para ${DAY}-${FILE}"
      mv $FILE ${DAY}-${FILE}
   done