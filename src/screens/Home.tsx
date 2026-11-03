import { View, Text, Platform, ScrollView, Pressable, StyleSheet } from "react-native";
import RouterBar from '../components/RouterBar';
import type { Task } from '../Types'
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Home(){

    const [tasks, setTasks] = useState<Task[]>([
      {
        Title: "Revisar relatório financeiro",
        Description: "Verificar os números do último trimestre antes do envio.",
        Assigned_to: "Diana Lima",
        Date: "2026-11-14",
        Concluded: false
      },
      {
        Title: "Implementar autenticação JWT",
        Description: "Adicionar tokens de acesso e refresh no fluxo de login.",
        Assigned_to: "Ana Silva",
        Date: "2026-11-08",
        Concluded: true
      },
      {
        Title: "Criar design da landing page",
        Description: "Criar protótipo de alta fidelidade no Figma.",
        Assigned_to: "Eduardo Costa",
        Date: "2026-11-22",
        Concluded: false
      },
      {
        Title: "Configurar pipeline CI/CD",
        Description: "Automatizar testes e deploy para ambiente de staging.",
        Assigned_to: "Bruno Santos",
        Date: "2026-11-05",
        Concluded: true
      },
      {
        Title: "Atualizar banco de dados",
        Description: "Executar scripts de migração pendentes.",
        Assigned_to: "Carlos Souza",
        Date: "2026-11-29",
        Concluded: false
      },
      {
        Title: "Reunião de alinhamento com cliente",
        Description: "Discutir novos requisitos técnicos recebidos.",
        Assigned_to: "Diana Lima",
        Date: "2026-11-19",
        Concluded: true
      },
      {
        Title: "Corrigir bug na tela de login",
        Description: "Resolver problema de loop infinito no botão de submit.",
        Assigned_to: "Ana Silva",
        Date: "2026-11-02",
        Concluded: false
      },
      {
        Title: "Escrever testes unitários",
        Description: "Garantir cobertura acima de 80% nos serviços principais.",
        Assigned_to: "Carlos Souza",
        Date: "2026-11-11",
        Concluded: true
      },
      {
        Title: "Otimizar consultas SQL",
        Description: "Adicionar índices nas tabelas mais acessadas do sistema.",
        Assigned_to: "Bruno Santos",
        Date: "2026-11-27",
        Concluded: false
      },
      {
        Title: "Preparar apresentação institucional",
        Description: "Montar os slides com os resultados comerciais mais recentes.",
        Assigned_to: "Eduardo Costa",
        Date: "2026-11-15",
        Concluded: true
      },
      {
        Title: "Analisar métricas do GA4",
        Description: "Verificar a taxa de rejeição após a última atualização.",
        Assigned_to: "Ana Silva",
        Date: "2026-11-09",
        Concluded: false
      },
      {
        Title: "Desenvolver endpoint de produtos",
        Description: "Criar métodos GET, POST e DELETE conforme especificação.",
        Assigned_to: "Carlos Souza",
        Date: "2026-11-13",
        Concluded: true
      },
      {
        Title: "Configurar servidor AWS",
        Description: "Definir regras de segurança nos grupos de acesso.",
        Assigned_to: "Diana Lima",
        Date: "2026-11-24",
        Concluded: false
      },
      {
        Title: "Revisar termos de uso",
        Description: "Garantir conformidade com a LGPD no novo formulário.",
        Assigned_to: "Bruno Santos",
        Date: "2026-11-01",
        Concluded: true
      },
      {
        Title: "Planejar sprint do próximo mês",
        Description: "Selecionar e priorizar histórias de usuário do backlog.",
        Assigned_to: "Eduardo Costa",
        Date: "2026-11-18",
        Concluded: false
      }
    ]);

    const [tasksFilter, setTasksFilter] = useState<boolean>(false);

    const concludedTasks = tasks.filter((task) => (task.Concluded)).length
    const concludedPercent = Number(((concludedTasks/tasks.length)*100).toFixed(0)) || 0
    
    // MUDANÇA: Cores dinâmicas da barra de progresso baseadas na paleta (Verde musgo suave, terracota e verde vibrante)
    const progressColor = concludedPercent <= 33 ? '#8EA28F' : concludedPercent <= 66 ? '#D08C60' : '#4E9F3D' 

    return(
        <View style={{ flex: 1, backgroundColor: '#F4F1EA' }}> {/* MUDANÇA: Fundo geral alterado para um off-white aconchegante da paleta */}
            
            <View style={{flex: 4}}>

                <View style={{flex:1}}>

                    <View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                        {/* MUDANÇA: Fundo do container dos botões de filtro alterado para um cinza/esverdeado claro da paleta (#D4DCD5) */}
                        <View style={{height: '70%', width: '70%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius:100, backgroundColor:'#D4DCD5'}}>
                            <Pressable 
                                onPress={() =>{ if(tasksFilter){setTasksFilter(!tasksFilter)} }} 
                                // MUDANÇA: Cor ativa/inativa do botão adaptada para Verde Salva (#6C8A73) e transparente
                                style={[ styles.filterButton ,{backgroundColor: tasksFilter ? 'transparent' : '#6C8A73'}]}
                            >
                                <Text style={{ color: tasksFilter ? '#333' : '#FFF', fontWeight: 'bold' }}>Gerais</Text>
                            </Pressable>
                            
                            <Pressable 
                                onPress={() =>{ if(!tasksFilter){setTasksFilter(!tasksFilter)} }} 
                                // MUDANÇA: Cor do botão alternativo usando o mesmo Verde Salva da paleta
                                style={[ styles.filterButton ,{backgroundColor: tasksFilter ? '#6C8A73' : 'transparent'}]}
                            >
                                <Text style={{ color: tasksFilter ? '#FFF' : '#333', fontWeight: 'bold' }}>Pessoais</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{flex:1, gap:5, paddingHorizontal: 20}}>

                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                            <Text style={{ color: '#2C3531', fontWeight: '600' }}> {/* MUDANÇA: Cor do texto ajustada para um tom escuro elegante */}
                                Progresso
                            </Text>
                            <Text style={{ color: '#2C3531', fontWeight: 'bold' }}> {/* MUDANÇA: Cor da porcentagem ajustada */}
                                {concludedPercent}%
                            </Text>
                        </View>
                        <View style={{flex:1}}>
                            {/* MUDANÇA: Fundo da barra de progresso alterado para um tom suave da paleta (#E3E8E4) */}
                            <View style={{height: '40%', width: '100%', alignSelf:'center', borderRadius:20, backgroundColor: '#E3E8E4'}}>
                                <View style={{height:'100%', width:`${concludedPercent}%`, borderRadius:20, backgroundColor:`${progressColor}`}}></View>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{flex:3, paddingHorizontal: 15}}>

                    <View style={{paddingLeft: 5, marginBottom:10}}>
                        <Pressable>
                            <Text style={{ color: '#2C3531', fontWeight: 'bold', fontSize: 16 }}> {/* MUDANÇA: Cor e destaque do título "Tarefas" */}
                                Tarefas <FontAwesome6 name="angle-right" size={18} color="#2C3531" />
                            </Text>
                        </Pressable>
                    </View>

                    <ScrollView style={{flex:1}} contentContainerStyle={{ gap: 10, paddingBottom:20}}>

                        {tasks.filter((task) => (!task.Concluded)).map(
                            (task) => (
                                <View key={task.Title} style={styles.TaskCard}>
                                    <Pressable>
                                        <Text style={{ color: '#2C3531', fontWeight: 'bold', fontSize: 15 }}>{task.Title}</Text>  
                                        <Text style={{ color: '#555', fontSize: 13, marginTop: 4 }}>{task.Assigned_to}</Text>
                                    </Pressable>
                                </View>
                            )
                        )}

                        <Text style={{paddingLeft: 5, marginBottom:5, marginTop: 10, color: '#2C3531', fontWeight: 'bold', fontSize: 16 }}>Concluídas</Text>

                            {tasks.filter((task) => (task.Concluded)).map(
                                (task) => (
                                    // MUDANÇA: Cards de tarefas concluídas com opacidade menor ou cor diferenciada da paleta
                                    <View key={task.Title} style={[styles.TaskCard, { backgroundColor: '#C5D1C7' }]}>
                                        <Pressable>
                                            <Text style={{ color: '#3A4F41', fontWeight: 'bold', fontSize: 15, textDecorationLine: 'line-through' }}>{task.Title}</Text>  
                                            <Text style={{ color: '#5A6F61', fontSize: 13, marginTop: 4 }}>{task.Assigned_to}</Text>
                                        </Pressable>
                                    </View>
                                )
                            )}

                    </ScrollView>

                </View>

            </View>

            <RouterBar/>
        </View>
    );
}

const styles = StyleSheet.create({

    filterButton:{
        height: '70%', // Ajustado para preencher melhor o espaço arredondado
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20
    },
    TaskCard:{
        flexDirection: 'column',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'flex-start',
        height: 90,
        width:'100%',
        padding:15,
        borderRadius:12,
        // MUDANÇA: Substituição do "grey" padrão por um tom verde-acinzentado elegante da paleta (#D9E2DC) para os cards pendentes
        backgroundColor:'#D9E2DC',
        // Sombra leve para dar profundidade aos cards
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
    }

})