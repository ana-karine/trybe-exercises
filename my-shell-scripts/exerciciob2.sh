  #!/bin/bash

  CAMINHOS=$@  #aceita uma quantidade ilimitada de arquivos ou diretórios como argumento
  for CAMINHO in $CAMINHOS
    do
      if [ -f "$CAMINHO" ]
        then
          echo "$CAMINHO é um arquivo comum"
      elif [ -d "$CAMINHO" ]
        then
          echo "$CAMINHO é um diretório"
      else
          echo "$CAMINHO é outro tipo de arquivo"
      fi
      ls -l $CAMINHO
    done