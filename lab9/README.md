# Travel Booking App

## Resumen de la App y sus Funcionalidades

**Travel Booking App** es una aplicación diseñada para que los usuarios exploren destinos turísticos, reserven viajes y administren su perfil y configuraciones. Entre las características clave se incluyen:

- **Listado de destinos:** Permite al usuario explorar destinos disponibles.
- **Detalle del destino:** Información detallada de cada destino, con imágenes, descripciones y precios.
- **Flujo de autenticación:** Inicio de sesión y registro para acceder a características personalizadas.
- **Búsqueda:** Filtrado y búsqueda avanzada de destinos.
- **Notificaciones:** Apartado para mostrar alertas, ofertas y recordatorios.
- **Perfil y Configuraciones:** El usuario puede modificar su información personal y preferencias.

## Estructura de la Navegación

La navegación hace uso de React Navigation con múltiples niveles de anidación:

- **Root Navigator (Stack):**  
  Determina si el usuario ve el flujo de autenticación o el contenido principal, según su estado de autenticación.
  
  - **Auth Navigator (Stack):**
    - **Login**
    - **Register**
  
  - **App Navigator (Drawer):**
    - **HomeTabs (Bottom Tabs):**
      - **FeedStack (Stack):**
        - Home (destinos principales)
        - Details (detalle del destino)
      - **SearchStack (Stack):**
        - Search (búsqueda de destinos)
        - Details (detalle del destino desde resultados)
      - **Notifications (Screen)**
    - **Profile (Screen)**
    - **Settings (Screen)**

La jerarquía es:
`RootStack`  
└── si no autenticado → `AuthStack` (Login/Register)  
└── si autenticado → `AppDrawer` (incluye `HomeTabs`, `Profile`, `Settings`)

En `HomeTabs`: `FeedStack` & `SearchStack` anidan sus propias pantallas.

## Personalizaciones en Componentes de Navegación

- **Headers personalizados:** Títulos con estilos propios, potencialmente íconos o botones de acción.
- **Íconos en Bottom Tabs:** Con `react-native-vector-icons`, se agregaron íconos claros y atractivos para cada tab, con cambios de color en estado activo/inactivo.
- **Deep Linking:** Configuración para que la app responda a enlaces externos (ejemplo: `travelbookingapp://register`).
- **Animaciones personalizadas:** Ajuste de transiciones entre pantallas usando las opciones del Stack Navigator.

## Optimización de Rendimiento

- **Lazy Loading de Pantallas:** Carga diferida de pantallas para mejorar el tiempo de inicio.
- **Memoización:** Uso de `React.memo`, `useMemo` y `useCallback` para prevenir renders innecesarios.
- **Code Splitting:** División del código para que solo se carguen las partes necesarias en el arranque.
- **Optimización de Recursos:** Uso de imágenes ligeras y estrategias de caché.

## Enfoque de Manejo de Estado

- **Context API:**
  - **AuthContext:** Mantiene el estado `isAuthenticated` y funciones `login()` y `logout()`.
  
Este enfoque evita la necesidad de librerías adicionales y mantiene el control de estado simple y centralizado.

## Desafíos y Cómo se Abordaron

- **Deep Linking en iOS/Android:**  
  Inicialmente, el deeplink no llevaba a la pantalla correcta. Se resolvió garantizando la carga del URL inicial antes de montar el `NavigationContainer` y ajustando la configuración de `linking.config`.

- **Navegación Anidada Compleja:**  
  Diseñar la estructura con múltiples niveles requirió cuidado. Se separaron navegadores en diferentes archivos y se definió cuidadosamente el `linking.config` para mantener claridad.

- **Rendimiento:**  
  La carga inicial era algo lenta, por lo que se aplicaron lazy loading, memoización y code splitting.

## Instrucciones para Ejecutar la App

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/TravelBookingApp.git
   cd TravelBookingApp
   ```

2. **Instalar Dependencias**

   ```bash
   npm install
   ```
   o

   ```bash
   yarn install
   ```

3. **Instalar Pods (iOS)**

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Ejecutar la App**

   - iOS (simulador)

   ```bash
   npx react-native run-ios
   ```

   - Android (emulador/dispositivo)

   ```bash
   npx react-native run-android
   ```

5. Probar Deep Linking

   - iOS

   ```bash
   xcrun simctl openurl booted travelbookingapp://register
   ```

   - Android

   ```bash
   adb shell am start -W -a android.intent.action.VIEW -d "travelbookingapp://register" com.tu.paquete
   ```

Esto abrirá la app directamente en la pantalla Register, asumiendo que la configuración del linking y el estado de autenticación estén correctamente establecidos.

## Evidencia

![./RM-img.gif](RM-img.gif)
