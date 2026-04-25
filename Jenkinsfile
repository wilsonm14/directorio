pipeline {
    agent any

    stages {

        stage('Clean') {
            steps {
                deleteDir()
            }
        }

        stage('Clonar Repo') {
            steps {
                git 'https://github.com/wilsonm14/directorio.git'
            }
        }

        stage('Extraer imágenes') {
            steps {
                sh '''
                docker pull wilsonmz/users-service
                docker pull wilsonmz/business-service
                docker pull wilsonmz/orders-service
                docker pull wilsonmz/search-service
                docker pull wilsonmz/gateway
                '''
            }
        }

        stage('Limpiar contenedores') {
            steps {
                sh '''
                docker stop $(docker ps -q) || true
                docker rm $(docker ps -aq) || true
                '''
            }
        }

        stage('Levantar microservicios') {
            steps {
                sh '''
                docker run -d -p 3001:3000 --name users wilsonmz/users-service || true
                docker run -d -p 3002:3000 --name business wilsonmz/business-service || true
                docker run -d -p 3003:3000 --name orders wilsonmz/orders-service || true
                docker run -d -p 3004:3000 --name search wilsonmz/search-service || true
                docker run -d -p 3000:3000 --name gateway wilsonmz/gateway || true
                '''
            }
        }

        stage('Verificar') {
            steps {
                sh 'docker ps'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Levantando microservicios...'
                sh 'docker compose up -d'
    }
}
    }
}
