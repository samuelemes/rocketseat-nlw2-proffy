import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
              <form id="search-teachers">
                <Select 
                    name="subject" 
                    label="Matéria" 
                    options={[
                      {value: 'Artes', label: 'Artes'},
                      {value: 'Biologia', label: 'Biologia'},
                      {value: 'Ciências', label: 'Ciencias'},
                      {value: 'Educação física', label: 'Educação fisica'},
                      {value: 'Fisica', label: 'Fisica'},
                      {value: 'Geografia', label: 'Geografia'},
                      {value: 'Matemática', label: 'Matematica'},
                      {value: 'Portugues', label: 'Portugues'},
                      {value: 'Quimica', label: 'Quimica'},
                    ]}  
                  />

                <Select 
                    name="week_daty" 
                    label="Dia da Semana" 
                    options={[
                      {value: '0', label: 'Domingo'},
                      {value: '1', label: 'Segunda-feira'},
                      {value: '2', label: 'Terça-feira'},
                      {value: '3', label: 'Quarta-feira'},
                      {value: '4', label: 'Quinta-feira'},
                      {value: '5', label: 'Sexta-feira'},
                      {value: '6', label: 'Sábado'},
                    ]}  
                  />

                  <Input type="time" name="time" label ="Hora" />
              </form>
            </PageHeader>

            <main>
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
            </main>
        </div>
    )
}
export default TeacherList;
