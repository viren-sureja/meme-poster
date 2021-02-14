# installation related commands


# install mongodb
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
node -v
npm -v

# install git
sudo yum update -y
sudo yum install git -y
git --version

# clone repo
git clone https://gitlab.crio.do/COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/virensureja3-me_buildout_xmeme.git
cd virensureja3-me_buildout_xmeme




# curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

# # installing the downloaded file
# sudo apt install nodejs

# # checking the version of node
# node --version

# # checking the version of npm
# npm --version




