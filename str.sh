#!/bin/bash

echo "🛠️  Creando módulos base..."

# Módulos generales
ng generate module src/app/core
ng generate module src/app/shared
ng generate module src/app/ui

# Módulos funcionales con routing
for modulo in inventory providers
do
  ng generate module src/app/$modulo --routing
done

echo "✅ Módulos creados con éxito."
