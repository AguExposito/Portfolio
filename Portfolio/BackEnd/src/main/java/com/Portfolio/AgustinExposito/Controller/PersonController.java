/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Portfolio.AgustinExposito.Controller;

import com.Portfolio.AgustinExposito.Entity.Person;
import com.Portfolio.AgustinExposito.Interface.IPersonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @Autowired IPersonService ipersonService;
    
    @GetMapping("personas/traer")
    public List<Person> getPerson(){
        return ipersonService.getPerson();
    }
    
    @PostMapping("/personas/crear")
    public String createPerson(@RequestBody Person person){
        ipersonService.savePerson(person);
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePerson(@PathVariable Long id){
        ipersonService.deletePerson(id);
        return "La persona fue borrada correctamente";
    }
    
    //URL:PUERTO/personas/editar/id/nombre & apellido & img
    @PutMapping("/personas/editar/{id}")
    public Person editPerson(@PathVariable Long id, 
                             @RequestParam("nombre") String nuevoNombre, 
                             @RequestParam("apellido") String nuevoApellido,
                             @RequestParam("img") String nuevoImg){
        Person person = ipersonService.findPerson(id);
        
        person.setName(nuevoNombre);
        person.setSurname(nuevoApellido);
        person.setImg(nuevoImg);
        
        ipersonService.savePerson(person);
        return person;
    }
}
