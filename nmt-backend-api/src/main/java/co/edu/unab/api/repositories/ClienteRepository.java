package co.edu.unab.api.repositories;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import co.edu.unab.api.models.ClienteModel;

@Repository
public interface ClienteRepository extends MongoRepository<ClienteModel , String> {
    
    public ArrayList <ClienteModel> findByNombre(String nombre); //llamo el metodo que usare//creo la query 
    //findByNombre es el metodo generico. equivale al campo de la coleccion/documento clienteModel
    //su respectivo valor sera el que vamos a buscar, que corresponde a un String con el nombre que necesitamos.

    @Query("{'apellido':?0}")
    public ArrayList <ClienteModel> buscarPorApellido(String apellido);
    
    //@Query("{'identificacion':?0}")
    //public ArrayList <ClienteModel> buscarPorIdentificacion(String identificacion);

     public ArrayList <ClienteModel>findByIdentificacion(String identificacion);

}

