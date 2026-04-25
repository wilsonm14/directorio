pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Clone Repo') {
            steps {
                git 'https://github.com/wilsonm14/directorio.git'
            }
        }

        stage('Pull Images') {
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

        stage('Stop Old Containers') {
            steps {
                sh '''
                docker stop $(docker ps -q) || true
                docker rm $(docker ps -aq) || true
                '''
            }
        }

        stage('Run Containers') {
            steps {
                sh '''
                docker run -d -p 3001:3000 --name users-service wilsonmz/users-service
                docker run -d -p 3002:3000 --name business-service wilsonmz/business-service
                docker run -d -p 3003:3000 --name orders-service wilsonmz/orders-service
                docker run -d -p 3004:3000 --name search-service wilsonmz/search-service
                docker run -d -p 3000:3000 --name gateway wilsonmz/gateway
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
