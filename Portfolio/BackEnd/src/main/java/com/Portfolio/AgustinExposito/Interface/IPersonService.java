/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Portfolio.AgustinExposito.Interface;

import com.Portfolio.AgustinExposito.Entity.Person;
import java.util.List;


public interface IPersonService {
    public List<Person> getPerson();
    
    public void savePerson(Person person);
    
    public void deletePerson(Long id);
    
    public Person findPerson(Long id);
}
