 #!/bin/bash
 # Modifica o Shell Script do exercício anterior (exerciciob3.sh) para receber 
 # o diretório onde estão os arquivos e a extensão dos arquivos que devem ser 
 # modificados como argumento (ou parâmetro). 
 # Adiciona também um mensagem mostrando como eram o como vão ficar os nomes 
 # dos arquivos a serem modificados.


  DIRECTORY=$1    #recebe o diretório onde estão os arquivos que devem ser modificados
  EXTENSION=$2    #recebe a extensão dos arquivos que devem ser modificados 

  DAY=$(date +%F)

  cd $DIRECTORY   

  for FILE in `ls *.$EXTENSION`
   do
      echo "Renomeando $FILE para ${DAY}-${FILE}"
      mv $FILE ${DAY}-${FILE}
   done