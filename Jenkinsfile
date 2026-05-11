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

        stage('Build') {
            steps {
                echo 'Build OK'
            }
        }

        stage('Eliminar contenedores viejos') {
            steps {
                sh '''
                docker rm -f users-service || true
                docker rm -f business-service || true
                docker rm -f orders-service || true
                docker rm -f search-service || true
                docker rm -f gateway || true
                '''
            }
        }

        stage('Deploy') {
            steps {

                echo 'Levantando contenedores...'

                sh '''
                docker run -d --name users-service -p 3001:3000 wilsonmz/users-service

                docker run -d --name business-service -p 3002:3000 wilsonmz/business-service

                docker run -d --name orders-service -p 3003:3000 wilsonmz/orders-service

                docker run -d --name search-service -p 3004:3000 wilsonmz/search-service

                docker run -d --name gateway -p 3000:3000 wilsonmz/gateway
                '''
            }
        }

        stage('Verificar') {
            steps {
                sh 'docker ps'
            }
        }

    }
}
