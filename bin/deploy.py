import os
import datetime

now = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

print(f"[STARTED] Starting deployment at {now}")

app_root = "/Users/mansoo/Workspace/mansoo/devnology"
s3_bucket = "s3://blog.devnology.co.kr"

print("====================================================================================================")
print("Building devnology")
print("====================================================================================================")
os.system("yarn build")

print("====================================================================================================")
print(f"Deploying new version from {app_root}/dist to {s3_bucket}/ --profile chance")
print("====================================================================================================")
os.system(f"aws s3 sync {app_root}/dist/ {s3_bucket}/ --profile chance")

end = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
print(f"[FINISHED] Deployment Finished at {end}")
