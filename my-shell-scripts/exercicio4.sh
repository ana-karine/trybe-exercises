#!/bin/bash
FILE="/home/usuario/Documentos/github/my-shell-scripts/exercicio4.sh"
if [ -e "$FILE" ]
  then
    echo "O caminho $FILE está habilitado!"
fi
if [ -w "$FILE" ]
  then
    echo "Você tem permissão para editar $FILE"
  else
    echo "Você NÃO foi autorizado a editar $FILE"
fi