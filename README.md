- Endpoints Doctores:
  - Registro/s:
    - URL: /doctors/createDoctor (registro de un solo perfil)
    - URL: /doctors/createDoctors (registro de varios perfiles a la vez)
    - Método: POST
    - Descripción: Se ingresan los atributos correspondientes para la creación del perfil y su registro en base de datos.
    - Cuerpo de solicitud:
    ```
    {
        "nombre": "Susana",
        "apellido": "López",
        "especialidad":"Oftalmologa",
        "email": "susana.oft@mail.com",
        "telefono": "5411 6521-4587",
        "direccion": "siempreviva 569"
    }
    ```
    ----------------------------------------------------
  - Listado:
    - URL: /doctors
    - Método: GET
    - Descripción: Se muestra un listado de todos los doctores registrados en la base de datos.
    - Cuerpo de solicitud: ninguno
    - Respuesta exitosa:
      Código 200 OK
    ```
    [
      {
        "idMedico": 1,
        "nombre": "John",
        "apellido": "Doe",
        "especialidad": "Cardiology",
        "email": "john.doe@example.com",
        "telefono": "+1-555-1234",
        "deleted": false
      },
      {
        "idMedico": 2,
        "nombre": "Pedro",
        "apellido": "Garcia",
        "especialidad": "Endocrinologo",
        "email": "pedrogarcia@example.com",
        "telefono": "+1-555-1234",
        "deleted": false
      }
    ]
    ```
    --------------------------------
  - Búsqueda:
    - URL: /doctors/{id}
    - Método: GET
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
    - Solicitud: .../doctors/1 (El "1" corresponde al n° de id de registro en bd.)
    - Respuesta exitosa: Código 200 OK
    ```
    {
    "idMedico": 1,
    "nombre": "John",
    "apellido": "Doe",
    "especialidad": "Cardiology",
    "email": "john.doe@example.com",
    "telefono": "+1-555-1234",
    "deleted": false
    }
    ```
    --------------------------------
  - Actualizar perfil:
    - URL: /doctors/{id}
    - Método: PUT
    - Descripción: Se ingresan el n° de id para realizar búsqueda del perfil para realizar la operación.
    - Solicitud: .../doctors/1
    ```
    {
      "nombre": "Nuevo Nombre",
      "apellido": "Nuevo Apellido",
      "especialidad": "Nueva Especialidad",
      "email": "Nuevo.mail@mail.com",
      "telefono": "+1 5555-5555"
    }
    ```
    - Respuesta exitosa: Código 200 OK
    ```
    {
    "idMedico": 1,
    "nombre": "Nuevo Nombre",
    "apellido": "Nuevo Apellido",
    "especialidad": "Nueva Especialidad",
    "email": "Nuevo.mail@mail.com",
    "telefono": "+1 5555-5555"
    "deleted": false
    }
    ```
    -----------------------------------
  - Borrado:
    - URL: /doctors/{id}
    - Método: DELETE
    - Descripción: Se ingresan el n° de id para realizar búsqueda del perfil a borrar.
    - Solicitud: .../doctors/1
    - Respuesta exitosa: Código 200 OK
    ```
      {
        "idMedico": 1,
        "nombre": "John",
        "apellido": "Doe",
        "especialidad": "Cardiology",
        "email": "john.doe@example.com",
        "telefono": "+1-555-1234",
        "deleted": true
      }
    ```
    ---------------------------------
  - Búsqueda de perfil borrado:
    - URL: /doctors/deleted/{id}
    - Método: GET
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
    - Solicitud: .../doctors/deleted/1
    - Respuesta exitosa: Código 200 OK
    ```
      {
        "idMedico": 1,
        "nombre": "John",
        "apellido": "Doe",
        "especialidad": "Cardiology",
        "email": "john.doe@example.com",
        "telefono": "+1-555-1234",
        "deleted": true
      }
    ```
  ----------------------------------------
  - Restauración de perfil borrado:
    - URL: /doctors/restore/{id}
    - Método: PUT
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado y restaurarlo.
    - Solicitud: .../doctors/restore/1 
    - Respuesta exitosa: Código 200 OK
    ```
      {
        "idMedico": 1,
        "nombre": "John",
        "apellido": "Doe",
        "especialidad": "Cardiology",
        "email": "john.doe@example.com",
        "telefono": "+1-555-1234",
        "deleted": false
      }
    ```
----------------------------------------------------
- Enpoints Pacientes:
  - Registro:
    - URL: /patients/create/{user_id}
    - Método: POST
    - Descripción: Se ingresan los atributos correspondientes para la creación del perfil y también se establece, en la URL, su relación con el usuario creado en primera instancia.
    - Cuerpo de solicitud:
      ```
      {
        "name": "Laura",
        "lastName": "Perez",
        "email": "Laura45@mail.com",
        "telephone": "54 11 3158-6547",
        "address": "Avenida Prueba 547 5° piso, departamento B"
      }
      ```
  -----------------------------------------
  - Listado:
    - URL: /patients/all
    - Método: GET
    - Descripción: Se muestra un listado de todos los perfiles registrados en base de datos.
    - Cuerpo de solicitud: ninguno
    - Respuesta exitosa: Código 200 OK
      ```
      [
        {
          "patient_id": 1,
          "name": "John",
          "lastName": "Doe",
          "email": "johndoe@example.com",
          "telephone": "1234567890",
          "address": "123 Main St",
          "deleted": false
        },
        {
          "patient_id": 2,
          "name": "John02",
          "lastName": "Doe02",
          "email": "johndoe02@example.com",
          "telephone": "987654321",
          "address": "321 Main St",
          "deleted": false
        }
      ]
      ```
  ------------------------------------------
  - Búsqueda por ID:
    - URL: /patients/{patient_id}
    - Método: GET
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
    - Solicitud: .../patients/1
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "patient_id": 1,
        "name": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "telephone": "1234567890",
        "address": "123 Main St",
        "deleted": false
      }
      ```
  -----------------------------------------
  - Actualización del perfil:
    - URL: /patients/update/{patient_id}
    - Método: PUT
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
    - Solicitud: .../patients/update/1 
      ```
      {
          "name": "Nuevo Nombre",
          "lastName": "Nuevo Apellido",
          "email": "nuevo.mail@example.com",
          "telephone": "987654321",
          "address": "321 Main St"
      }
      ```
      
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "patient_id": 1,
        "name": "Nuevo Nombre",
        "lastName": "Nuevo Apellido",
        "email": "nuevo.mail@example.com",
        "telephone": "987654321",
        "address": "321 Main St",
        "deleted": false
      }
      ```
  ---------------------------------------------
  - Borrado de perfil:
    - URL: /patients/delete/{patient_id}
    - Método: DELETE
    - Descripción: Se ingresan el n° de id para realizar búsqueda del perfil a borrar.
    - Solicitud: .../patients/delete/1 
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "patient_id": 1,
        "name": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "telephone": "1234567890",
        "address": "123 Main St",
        "deleted": true
      }
      ```
  -------------------------------------
  - Listado de pacientes borrados:
    - URL: .../patients/deleted
    - Método: GET
    - Descripción: Muestra un listado de los perfiles eliminados
    - Solicitud: .../patients/deleted 
    - Respuesta exitosa: Código 200 OK
       ```
      {
        "patient_id": 1,
        "name": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "telephone": "1234567890",
        "address": "123 Main St",
        "deleted": true
      },
      {
        "patient_id": 2,
        "name": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "telephone": "1234567890",
        "address": "123 Main St",
        "deleted": true
      }
      ```
  ----------------------------------
  - Restauración de perfil borrado:
    - URL: .../patients/restore/{patient_id}
    - Método: PUT
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado y restaurarlo.
    - Solicitud: .../patients/restore/1 
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "patient_id": 1,
        "name": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "telephone": "1234567890",
        "address": "123 Main St",
        "deleted": false
      }
      ```
  --------------------------------------------------------
  - Crear un historial médico del paciente:
    - URL: .../patients/{id}/medical-histories
    - Método: POST
    - Descripción: Mediante la búsqueda interna del perfil a través del n° id del paciente, se registra un nuevo historial que queda enlazado al perfil del paciente.
    - Solicitud: .../patients/1/medical-histories 
      ```
      {
        "consultationDate": "YYYY/MM/DDHH:MM:SS",
        "note": "Una breve descripción del motivo de consulta",
        "observation":"Se escriben las observaciones escritas por el médico.",
        "medicalTreatment": "Descripción del tratamiento",
        "speciality": "Oftalmología"
      }  
         
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "idMedicalHistory": 1,
        "consultationDate": "2024-09-10",
        "note": "Una breve descripción del motivo de consulta",
        "observation": "Se escriben las observaciones escritas por el médico.",
        "medicalTreatment": "Descripción del tratamiento",
        "speciality": "Oftalmología",
        "patient": {
            "patient_id": 1,
            "name": "Laura",
            "lastName": "Perez",
            "email": "Laura45@mail.com",
            "telephone": "54 11 3158-6547",
            "address": "Avenida Prueba 547 5° piso, departamento B",
            "deleted": false
        }
      ```
  ---------------------------------------------
  - Obtener un historial medico:
    - URL: .../patients/{id}/medical-histories
    - Método: GET
    - Descripción: Mediante la búsqueda interna del perfil a través del n° id del paciente, se obtienen todos los historiales enlazados al paciente buscado.
    - Solicitud: .../patients/1/medical-histories
    - Respuesta exitosa: Código 200 OK
      ```
      [
        {
        "idMedicalHistory": 1,
        "consultationDate": "2024-09-10",
        "note": "Una breve descripción del motivo de consulta",
        "observation": "Se escriben las observaciones escritas por el médico.",
        "medicalTreatment": "Descripción del tratamiento",
        "speciality": "Oftalmología",
        "patient": {
            "patient_id": 1,
            "name": "Laura",
            "lastName": "Perez",
            "email": "Laura45@mail.com",
            "telephone": "54 11 3158-6547",
            "address": "Avenida Prueba 547 5° piso, departamento B",
            "deleted": false
        },
        "deleted": false
        }
      ]
      ```
-----------------------------------------
- Endpoints Admins:
  - Creación de perfil de admins:
    - URL: .../admins/createadmins
    - Método: POST
    - Descripción: Se ingresan los atributos correspondientes para la creación del perfil y su registro en base de datos.
    - Cuerpo de Solicitud:
       ```
       {
        "nombre": "Paula",
        "apellido": "Dominguez",
        "email": "paula.84@mail.com",
        "telefono": "65214587"
      }
       ```
  --------------------------------------
  - Listado de admins:
    - URL: .../admins
    - Método: GET
    - Descripción: Se obtiene un listado de los perfiles cargados en la base de datos.
    - Cuerpo de Solicitud: ninguno
    - Respuesta exitosa: Código 200 OK
      ```
        [
          {
          "idAdmin": 1,
          "nombre": "Juan",
          "apellido": "Pérez",
          "email": "juan.perez@example.com",
          "telefono": "123456789",
          "deleted": false
          },
          {
          "idAdmin": 2,
          "nombre": "María",
          "apellido": "González",
          "email": "maria.gonzalez@example.com",
          "telefono": "987654321",
          "deleted": false
          }
        ]
  --------------------------------------
  - Búsqueda por ID:
    - URL: .../admins/{id}
    - Método: GET
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
    - Solicitud: .../admins/1
    - Respuesta exitosa: código 200 OK
      ```
      {
        "idAdmin": 1,
        "nombre": "Juan",
        "apellido": "Pérez",
        "email": "juan.perez@example.com",
        "telefono": "123456789",
        "deleted": false
      }
      ```
  --------------------------------------
  - Actualizar:
    - URL: .../admins/{id}
    - Método: PUT
    - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado para actualizar sus datos.
    - Solicitud: .../admins/1
      ```
      {
        "nombre": "Nuevo Nombre",
        "apellido": "Nuevo Apellido",
        "email": "nuevo.mail@mail.com",
        "telefono": "987654321"
      }
      ```
    - Respuesta exitosa: Código 200 OK
      ```
      {
        "idAdmin": 1,
        "nombre": "Nuevo Nombre",
        "apellido": "Nuevo Apellido",
        "email": "nuevo.mail@mail.com",
        "telefono": "98765432
        "deleted": false
      }
      ```
    --------------------------------------------------------------
    - Borrado de perfil admin:
      - URL: .../admins/{id}
      - Método: DELETE
      - Descripción: Se ingresan el n° de id para realizar búsqueda del perfil que se desea eliminar.
      - Solicitud: .../admins/1
      - Respuesta exitosa: Código 200 OK
        ```
          {
            "idAdmin": 1,
            "nombre": "Juan",
            "apellido": "Pérez",
            "email": "juan.perez@example.com",
            "telefono": "123456789",
            "deleted": true
          }
        ```
    --------------------------------------------------------------
    - Obtener los perfiles eliminados de admins:
      - URL: .../admins/deleted
      - Método: GET
      - Descripción: Se muestra un listado de los perfiles que han sido eliminados.
      - Solicitud: .../admins/1
      - Respuesta exitosa: Código 200 OK
        ```
          [
            {
                "idAdmin": 1,
                "nombre": "Paula",
                "apellido": "Dominguez",
                "email": "paula.84@mail.com",
                "telefono": "65214587",
                "deleted": true
            },
            {
                "idAdmin": 2,
                "nombre": "Paula",
                "apellido": "Dominguez",
                "email": "paula.84@mail.com",
                "telefono": "65214587",
                "deleted": true
            }
          ]
        ```
      ----------------------------------------------
      - Restauración de perfiles borrados:
        - URL: .../admins/restore/{id}
        - Método: PUT
        - Descripción: Se ingresan el n° de id para realizar búsqueda del perfil que se desea restaurar.
        - Solicitud: .../admins/restore/1
        - Respuesta exitosa: Código 200 OK
          ```
          {
            "idAdmin": 2,
            "nombre": "Paula",
            "apellido": "Dominguez",
            "email": "paula.84@mail.com",
            "telefono": "65214587",
            "deleted": false
          }
          ```
      ----------------------------------------------
      - Endpoints Usuarios:
        - Registro:
          - URL: .../users/create
          - Método: POST
          - Descripción: Se ingresan los atributos correspondientes para la creación del perfil y su registro en base de datos.
          - Cuerpo de Solicitud:
            ```
            {
              "userName": "UserName1",
              "password": "44444"
            }
            ```
          - Respuesta exitosa: Código 200 OK
        ----------------------------------------------
        - Login:
          - URL: .../users/login
          - Método: POST
          - Descripción: Se verifican que los datos creados sean los correctos para poder dar paso al home.
          - Cuerpo de Solicitud:
            ```
            {
              "userName": "UserName1",
              "password": "44444"
            }
            ```
             - Respuesta exitosa: Código 200 OK
          ---------------------------------------------
        - Update:
          - URL: .../users/update/1
          - Método: PUT
          - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado para actualizar sus datos.
          - Cuerpo de Solicitud:
             ```
            {
              "userName": "nuevoUserName",
              "password": "nuevoPass"
            }
            ```
          - Respuesta exitosa: Código 200 OK
             ```
            {
              "userName": "nuevoUserName",
              "password": "nuevoPass"
            }
            ```
        -------------------------------------------
        - Delete:
          - URL: .../users/delete/1
          - Método: DELETE
          - Descripción: Se ingresan el n° de id para eliminar el usuario elegido.
          - Cuerpo de Solicitud: .../users/delete/1
          - Respuesta exitosa: Código 200 OK
        -------------------------------------------
        - Listado de usuarios:
           - URL: .../users
           - Método: GET
           - Descripción: Se obtiene un listado de los perfiles cargados en la base de datos.
           - Cuerpo de solicitud: ninguno
           - Respuesta exitosa: Código 200 OK
             ```
              {
               "userId": 1,  
               "userName": "nuevoUserName",
               "password": "nuevoPass"
              },
              {
               "userId": 2,  
               "userName": "UserName1",
                "password": "44444"
              }
            ```
        ----------------------------------------------
        - Búsqueda por ID:
          - URL: .../users/{id}
          - Método: GET
          - Descripción: Se ingresan el n° de id para realizar búsqueda de un perfil determinado.
          - Solicitud: .../users/1
          - Respuesta exitosa: código 200 OK
            ```
            {
               "userId": 1,  
               "userName": "nuevoUserName",
               "password": "nuevoPass"
            }
            ```           
