  #!/bin/bash
  # Modifica o exercício 6 (exercicio6.sh) para aceitar uma quantidade 
  # ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

  CAMINHOS=$@  #aceita uma quantidade ilimitada de arquivos/diretórios como argumento
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