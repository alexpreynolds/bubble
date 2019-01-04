export const defaults = {
  "rows" : 4,
  "cols" : 6,
  "genome" : "hg38",
  "graph" : {
    "attractStrength" : 0.01,
    "clusterStrength" : 0.5,
    "clusterCenterInertia" : 0.1,
    "collideStrength" : 0,
    "transitionTime" : 3000
  },
  "data" : "tissue_invariant,chr1,14074\ntissue_invariant,chr10,7903\ntissue_invariant,chr11,8014\ntissue_invariant,chr12,7325\ntissue_invariant,chr13,4512\ntissue_invariant,chr14,5088\ntissue_invariant,chr15,5165\ntissue_invariant,chr16,4870\ntissue_invariant,chr17,5370\ntissue_invariant,chr18,3833\ntissue_invariant,chr19,4882\ntissue_invariant,chr2,13360\ntissue_invariant,chr20,3993\ntissue_invariant,chr21,2019\ntissue_invariant,chr22,2666\ntissue_invariant,chr3,10460\ntissue_invariant,chr4,8698\ntissue_invariant,chr5,9013\ntissue_invariant,chr6,9620\ntissue_invariant,chr7,8117\ntissue_invariant,chr8,7518\ntissue_invariant,chr9,6436\ntissue_invariant,chrX,4490\ntissue_invariant,chrY,244\nplacenta,chr1,24453\nplacenta,chr10,12837\nplacenta,chr11,13704\nplacenta,chr12,12115\nplacenta,chr13,6728\nplacenta,chr14,8467\nplacenta,chr15,8249\nplacenta,chr16,8546\nplacenta,chr17,10727\nplacenta,chr18,5511\nplacenta,chr19,10256\nplacenta,chr2,20943\nplacenta,chr20,7132\nplacenta,chr21,3544\nplacenta,chr22,5682\nplacenta,chr3,17366\nplacenta,chr4,13196\nplacenta,chr5,14618\nplacenta,chr6,14838\nplacenta,chr7,14234\nplacenta,chr8,11438\nplacenta,chr9,11629\nplacenta,chrX,8002\nplacenta,chrY,765\nneuronal,chr1,36305\nneuronal,chr10,22287\nneuronal,chr11,22172\nneuronal,chr12,20950\nneuronal,chr13,16735\nneuronal,chr14,14756\nneuronal,chr15,12990\nneuronal,chr16,14081\nneuronal,chr17,12392\nneuronal,chr18,13823\nneuronal,chr19,6128\nneuronal,chr2,40716\nneuronal,chr20,10901\nneuronal,chr21,5291\nneuronal,chr22,5770\nneuronal,chr3,33116\nneuronal,chr4,29654\nneuronal,chr5,30348\nneuronal,chr6,27649\nneuronal,chr7,25542\nneuronal,chr8,25011\nneuronal,chr9,19006\nneuronal,chrX,15007\nneuronal,chrY,848\nembryonic,chr1,55367\nembryonic,chr10,33305\nembryonic,chr11,30683\nembryonic,chr12,34648\nembryonic,chr13,17337\nembryonic,chr14,19278\nembryonic,chr15,19848\nembryonic,chr16,19228\nembryonic,chr17,31256\nembryonic,chr18,14954\nembryonic,chr19,15600\nembryonic,chr2,52755\nembryonic,chr20,17655\nembryonic,chr21,8061\nembryonic,chr22,13097\nembryonic,chr3,37079\nembryonic,chr4,29257\nembryonic,chr5,34230\nembryonic,chr6,32893\nembryonic,chr7,32791\nembryonic,chr8,29139\nembryonic,chr9,25779\nembryonic,chrX,21514\nembryonic,chrY,787\ndigestive,chr1,12895\ndigestive,chr10,6535\ndigestive,chr11,7599\ndigestive,chr12,6800\ndigestive,chr13,4488\ndigestive,chr14,4664\ndigestive,chr15,4377\ndigestive,chr16,4400\ndigestive,chr17,5107\ndigestive,chr18,3410\ndigestive,chr19,3278\ndigestive,chr2,12352\ndigestive,chr20,3807\ndigestive,chr21,1548\ndigestive,chr22,2388\ndigestive,chr3,9701\ndigestive,chr4,8442\ndigestive,chr5,8216\ndigestive,chr6,8896\ndigestive,chr7,7598\ndigestive,chr8,6506\ndigestive,chr9,5927\ndigestive,chrX,5325\ndigestive,chrY,422\nlymphoid,chr1,26250\nlymphoid,chr10,11819\nlymphoid,chr11,12253\nlymphoid,chr12,13385\nlymphoid,chr13,7725\nlymphoid,chr14,9441\nlymphoid,chr15,8849\nlymphoid,chr16,9984\nlymphoid,chr17,10866\nlymphoid,chr18,6409\nlymphoid,chr19,9735\nlymphoid,chr2,23613\nlymphoid,chr20,7174\nlymphoid,chr21,3626\nlymphoid,chr22,5478\nlymphoid,chr3,18913\nlymphoid,chr4,13407\nlymphoid,chr5,15154\nlymphoid,chr6,16204\nlymphoid,chr7,15286\nlymphoid,chr8,12285\nlymphoid,chr9,11601\nlymphoid,chrX,9837\nlymphoid,chrY,898\nmusculoskeletal,chr1,17187\nmusculoskeletal,chr10,11554\nmusculoskeletal,chr11,10872\nmusculoskeletal,chr12,9014\nmusculoskeletal,chr13,6716\nmusculoskeletal,chr14,7226\nmusculoskeletal,chr15,6478\nmusculoskeletal,chr16,7056\nmusculoskeletal,chr17,7288\nmusculoskeletal,chr18,5435\nmusculoskeletal,chr19,4432\nmusculoskeletal,chr2,18830\nmusculoskeletal,chr20,5856\nmusculoskeletal,chr21,3042\nmusculoskeletal,chr22,3911\nmusculoskeletal,chr3,14493\nmusculoskeletal,chr4,12510\nmusculoskeletal,chr5,12914\nmusculoskeletal,chr6,12338\nmusculoskeletal,chr7,11156\nmusculoskeletal,chr8,11089\nmusculoskeletal,chr9,9851\nmusculoskeletal,chrX,7323\nmusculoskeletal,chrY,323\nfibroblast2,chr1,35042\nfibroblast2,chr10,19368\nfibroblast2,chr11,18697\nfibroblast2,chr12,19744\nfibroblast2,chr13,13503\nfibroblast2,chr14,12040\nfibroblast2,chr15,12298\nfibroblast2,chr16,9859\nfibroblast2,chr17,12216\nfibroblast2,chr18,10423\nfibroblast2,chr19,6471\nfibroblast2,chr2,35733\nfibroblast2,chr20,8628\nfibroblast2,chr21,4832\nfibroblast2,chr22,4788\nfibroblast2,chr3,29382\nfibroblast2,chr4,26458\nfibroblast2,chr5,25832\nfibroblast2,chr6,26101\nfibroblast2,chr7,21224\nfibroblast2,chr8,20983\nfibroblast2,chr9,16949\nfibroblast2,chrX,13252\nfibroblast2,chrY,1060\nHSC_myeloid_erythroid,chr1,17183\nHSC_myeloid_erythroid,chr10,8651\nHSC_myeloid_erythroid,chr11,8702\nHSC_myeloid_erythroid,chr12,9191\nHSC_myeloid_erythroid,chr13,5693\nHSC_myeloid_erythroid,chr14,5670\nHSC_myeloid_erythroid,chr15,5768\nHSC_myeloid_erythroid,chr16,5598\nHSC_myeloid_erythroid,chr17,6731\nHSC_myeloid_erythroid,chr18,4035\nHSC_myeloid_erythroid,chr19,5066\nHSC_myeloid_erythroid,chr2,15454\nHSC_myeloid_erythroid,chr20,4504\nHSC_myeloid_erythroid,chr21,2500\nHSC_myeloid_erythroid,chr22,3305\nHSC_myeloid_erythroid,chr3,12910\nHSC_myeloid_erythroid,chr4,9836\nHSC_myeloid_erythroid,chr5,10143\nHSC_myeloid_erythroid,chr6,11722\nHSC_myeloid_erythroid,chr7,9904\nHSC_myeloid_erythroid,chr8,8977\nHSC_myeloid_erythroid,chr9,7525\nHSC_myeloid_erythroid,chrX,6967\nHSC_myeloid_erythroid,chrY,581\nepithelial,chr1,16751\nepithelial,chr10,8195\nepithelial,chr11,11715\nepithelial,chr12,8001\nepithelial,chr13,5647\nepithelial,chr14,5486\nepithelial,chr15,4195\nepithelial,chr16,4368\nepithelial,chr17,4946\nepithelial,chr18,4380\nepithelial,chr19,3936\nepithelial,chr2,16995\nepithelial,chr20,5355\nepithelial,chr21,1956\nepithelial,chr22,2297\nepithelial,chr3,14233\nepithelial,chr4,10347\nepithelial,chr5,13143\nepithelial,chr6,11252\nepithelial,chr7,11584\nepithelial,chr8,9644\nepithelial,chr9,6254\nepithelial,chrX,7390\nepithelial,chrY,419\nfetal_lung,chr1,7419\nfetal_lung,chr10,4984\nfetal_lung,chr11,4504\nfetal_lung,chr12,4248\nfetal_lung,chr13,3575\nfetal_lung,chr14,2814\nfetal_lung,chr15,2962\nfetal_lung,chr16,2487\nfetal_lung,chr17,2616\nfetal_lung,chr18,2851\nfetal_lung,chr19,1234\nfetal_lung,chr2,8715\nfetal_lung,chr20,2278\nfetal_lung,chr21,1151\nfetal_lung,chr22,1056\nfetal_lung,chr3,7009\nfetal_lung,chr4,6472\nfetal_lung,chr5,6377\nfetal_lung,chr6,5959\nfetal_lung,chr7,5401\nfetal_lung,chr8,5128\nfetal_lung,chr9,3793\nfetal_lung,chrX,3213\nfetal_lung,chrY,123\nepithelial_kidney_cancer,chr1,12103\nepithelial_kidney_cancer,chr10,7015\nepithelial_kidney_cancer,chr11,6511\nepithelial_kidney_cancer,chr12,6974\nepithelial_kidney_cancer,chr13,4543\nepithelial_kidney_cancer,chr14,4245\nepithelial_kidney_cancer,chr15,4148\nepithelial_kidney_cancer,chr16,4094\nepithelial_kidney_cancer,chr17,4237\nepithelial_kidney_cancer,chr18,3844\nepithelial_kidney_cancer,chr19,2437\nepithelial_kidney_cancer,chr2,12618\nepithelial_kidney_cancer,chr20,3450\nepithelial_kidney_cancer,chr21,1523\nepithelial_kidney_cancer,chr22,1866\nepithelial_kidney_cancer,chr3,9940\nepithelial_kidney_cancer,chr4,8906\nepithelial_kidney_cancer,chr5,9019\nepithelial_kidney_cancer,chr6,8988\nepithelial_kidney_cancer,chr7,8463\nepithelial_kidney_cancer,chr8,7316\nepithelial_kidney_cancer,chr9,6086\nepithelial_kidney_cancer,chrX,5140\nepithelial_kidney_cancer,chrY,621\nfibroblast1,chr1,4792\nfibroblast1,chr10,2630\nfibroblast1,chr11,2557\nfibroblast1,chr12,3647\nfibroblast1,chr13,2032\nfibroblast1,chr14,1583\nfibroblast1,chr15,1707\nfibroblast1,chr16,1457\nfibroblast1,chr17,1650\nfibroblast1,chr18,1444\nfibroblast1,chr19,822\nfibroblast1,chr2,4971\nfibroblast1,chr20,1239\nfibroblast1,chr21,685\nfibroblast1,chr22,748\nfibroblast1,chr3,4034\nfibroblast1,chr4,3539\nfibroblast1,chr5,3623\nfibroblast1,chr6,3564\nfibroblast1,chr7,2890\nfibroblast1,chr8,2849\nfibroblast1,chr9,2306\nfibroblast1,chrX,1317\nfibroblast1,chrY,100\nfetal_kidney,chr1,13294\nfetal_kidney,chr10,8915\nfetal_kidney,chr11,8447\nfetal_kidney,chr12,6883\nfetal_kidney,chr13,4579\nfetal_kidney,chr14,5233\nfetal_kidney,chr15,5148\nfetal_kidney,chr16,5832\nfetal_kidney,chr17,6246\nfetal_kidney,chr18,4436\nfetal_kidney,chr19,4402\nfetal_kidney,chr2,13522\nfetal_kidney,chr20,4763\nfetal_kidney,chr21,2212\nfetal_kidney,chr22,3591\nfetal_kidney,chr3,9480\nfetal_kidney,chr4,8077\nfetal_kidney,chr5,8327\nfetal_kidney,chr6,8442\nfetal_kidney,chr7,8483\nfetal_kidney,chr8,7373\nfetal_kidney,chr9,7221\nfetal_kidney,chrX,4038\nfetal_kidney,chrY,193\nvascular_endothelial,chr1,7255\nvascular_endothelial,chr10,4117\nvascular_endothelial,chr11,3663\nvascular_endothelial,chr12,4205\nvascular_endothelial,chr13,2942\nvascular_endothelial,chr14,2592\nvascular_endothelial,chr15,2703\nvascular_endothelial,chr16,2312\nvascular_endothelial,chr17,2568\nvascular_endothelial,chr18,2153\nvascular_endothelial,chr19,1143\nvascular_endothelial,chr2,7284\nvascular_endothelial,chr20,1951\nvascular_endothelial,chr21,1018\nvascular_endothelial,chr22,1013\nvascular_endothelial,chr3,6393\nvascular_endothelial,chr4,5206\nvascular_endothelial,chr5,5153\nvascular_endothelial,chr6,5505\nvascular_endothelial,chr7,4734\nvascular_endothelial,chr8,4001\nvascular_endothelial,chr9,3579\nvascular_endothelial,chrX,3081\nvascular_endothelial,chrY,255\ncardiac,chr1,10903\ncardiac,chr10,6137\ncardiac,chr11,5757\ncardiac,chr12,5553\ncardiac,chr13,3996\ncardiac,chr14,3351\ncardiac,chr15,4142\ncardiac,chr16,2835\ncardiac,chr17,3380\ncardiac,chr18,3357\ncardiac,chr19,1702\ncardiac,chr2,10373\ncardiac,chr20,2440\ncardiac,chr21,1239\ncardiac,chr22,1632\ncardiac,chr3,8884\ncardiac,chr4,7455\ncardiac,chr5,7826\ncardiac,chr6,7658\ncardiac,chr7,6399\ncardiac,chr8,6021\ncardiac,chr9,4523\ncardiac,chrX,3184\ncardiac,chrY,122",
  "colormap" : "nmf_16_component_colormap"
};

export const nmf_16_component_colormap = {
  'name' : '16-component NMF',
  'colors' : [
    { 
      "name" : "Tissue invariant",
      "realname" : "tissue_invariant",
      "rgb" : "rgb(195,195,195)",
      "hex" : "#C3C3C3"
    },
    { 
      "name" : "Fibroblast (1)",
      "realname" : "fibroblast1",
      "rgb" : "rgb(187,45,212)",
      "hex" : "#BB2DD4"
    },
    { 
      "name" : "Embryonic",
      "realname" : "embryonic",
      "rgb" : "rgb(5,193,217)",
      "hex" : "#05C1D9"
    },
    { 
      "name" : "Fibroblast (2)",
      "realname" : "fibroblast2",
      "rgb" : "rgb(122,0,255)",
      "hex" : "#7A00FF"
    },
    { 
      "name" : "Lymphoid",
      "realname" : "lymphoid",
      "rgb" : "rgb(254,129,2)",
      "hex" : "#FE8102"
    },
    { 
      "name" : "Epithelial kidney cancer",
      "realname" : "epithelial_kidney_cancer",
      "rgb" : "rgb(74,104,118)",
      "hex" : "#4A6876"
    },
    { 
      "name" : "Placenta",
      "realname" : "placenta",
      "rgb" : "rgb(255,229,0)",
      "hex" : "#FFE500"
    },
    { 
      "name" : "Neuronal",
      "realname" : "neuronal",
      "rgb" : "rgb(4,103,253)",
      "hex" : "#0467FD"
    },
    { 
      "name" : "Cardiac",
      "realname" : "cardiac", 
      "rgb" : "rgb(7,175,0)",
      "hex" : "#07AF00"
    },
    { 
      "name" : "Fetal kidney",
      "realname" : "fetal_kidney",
      "rgb" : "rgb(105,33,8)",
      "hex" : "#692108"
    },
    { 
      "name" : "Musculoskeletal",
      "realname" : "musculoskeletal",
      "rgb" : "rgb(76,125,20)",
      "hex" : "#4C7D14"
    },
    { 
      "name" : "Digestive",
      "realname" : "digestive",
      "rgb" : "rgb(0,149,136)",
      "hex" : "#009588"
    },
    { 
      "name" : "Vascular endothelial",
      "realname" : "vascular_endothelial",
      "rgb" : "rgb(65,70,19)",
      "hex" : "#414613"
    },
    { 
      "name" : "HSC myeloid erythroid",
      "realname" : "HSC_myeloid_erythroid",
      "rgb" : "rgb(255,0,0)",
      "hex" : "#FF0000"
    },
    { 
      "name" : "Epithelial",
      "realname" : "epithelial",
      "rgb" : "rgb(8,36,91)",
      "hex" : "#08245B"
    }
  ]
}

export const genome_sizes = {
  'hg19':{
    'chr1':{'ub':249250621},
    'chr2':{'ub':243199373},
    'chr3':{'ub':198022430},
    'chr4':{'ub':191154276},
    'chr5':{'ub':180915260},
    'chr6':{'ub':171115067},
    'chr7':{'ub':159138663},
    'chr8':{'ub':146364022},
    'chr9':{'ub':141213431},
    'chr10':{'ub':135534747},
    'chr11':{'ub':135006516},
    'chr12':{'ub':133851895},
    'chr13':{'ub':115169878},
    'chr14':{'ub':107349540},
    'chr15':{'ub':102531392},
    'chr16':{'ub':90354753},
    'chr17':{'ub':81195210},
    'chr18':{'ub':78077248},
    'chr19':{'ub':59128983},
    'chr20':{'ub':63025520},
    'chr22':{'ub':51304566},
    'chr21':{'ub':48129895},
    'chrX':{'ub':155270560},
    'chrY':{'ub':59373566},
  },
  'hg38':{
    'chr1':{'ub':248956422},
    'chr10':{'ub':133797422},
    'chr11':{'ub':135086622},
    'chr12':{'ub':133275309},
    'chr13':{'ub':114364328},
    'chr14':{'ub':107043718},
    'chr15':{'ub':101991189}, 
    'chr16':{'ub':90338345},
    'chr17':{'ub':83257441},
    'chr18':{'ub':80373285},
    'chr19':{'ub':58617616},
    'chr2':{'ub':242193529},
    'chr20':{'ub':64444167},
    'chr21':{'ub':46709983},
    'chr22':{'ub':50818468},
    'chr3':{'ub':198295559},
    'chr4':{'ub':190214555},
    'chr5':{'ub':181538259},
    'chr6':{'ub':170805979},
    'chr7':{'ub':159345973},
    'chr8':{'ub':145138636},
    'chr9':{'ub':138394717},
    'chrX':{'ub':156040895},
    'chrY':{'ub':57227415},
  },
  'mm10':{
    'chr1':{'ub':195471971},
    'chr10':{'ub':130694993},
    'chr11':{'ub':122082543},
    'chr12':{'ub':120129022},
    'chr13':{'ub':120421639},
    'chr14':{'ub':124902244},
    'chr15':{'ub':104043685},
    'chr16':{'ub':98207768},
    'chr17':{'ub':94987271},
    'chr18':{'ub':90702639},
    'chr19':{'ub':61431566},
    'chr2':{'ub':182113224},
    'chr3':{'ub':160039680},
    'chr4':{'ub':156508116},
    'chr5':{'ub':151834684},
    'chr6':{'ub':149736546},
    'chr7':{'ub':145441459},
    'chr8':{'ub':129401213},
    'chr9':{'ub':124595110},
    'chrX':{'ub':171031299},
    'chrY':{'ub':91744698},
  },
};
